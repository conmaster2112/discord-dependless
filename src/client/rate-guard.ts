import { toLowerKeyMappedObject } from "../request";

export class RateGuardManager {
   protected readonly buckets: Map<string, RateGuardBucket> = new Map();
   protected readonly bucketsByUrl: Map<string, RateGuardBucket> = new Map()
   public getByURL(url: string, method: string): RateGuardBucket | null {
      return this.bucketsByUrl.get(this.getUIDFromURL(url, method)) ?? null
   }
   public update(url: string, method: string, headers: Record<string, unknown>): RateGuardBucket | null {
      url = this.getUIDFromURL(url, method);
      const cloned = toLowerKeyMappedObject<Record<string, string>>(headers);
      const id = cloned["x-ratelimit-bucket"];
      if (!id) return null;

      let bucket = this.bucketsByUrl.get(url) ?? this.buckets.get(id);
      if (!bucket) {
         bucket = this.buckets.get(id);
         if (!bucket)
            this.buckets.set(id, bucket = new RateGuardBucket(id, url));

         this.bucketsByUrl.set(url, bucket);
      }
      else if (bucket.id !== id) {
         this.buckets.set(id, bucket = new RateGuardBucket(id, url));
         this.bucketsByUrl.set(url, bucket);
      }
      bucket.update(cloned);
      return bucket;
   }
   protected getUIDFromURL(url: string, method: string): string {
      url = url.replace(/\/\d+/g, "/");
      const ind = url.indexOf("?")
      if (ind !== -1) url = url.substring(0, ind);
      return `${method}::${url};`
   }
   public collect(): void {
      const now = Date.now();
      for (const key of this.buckets.keys()) {
         const bucket = this.buckets.get(key)!;
         if (now - bucket.lastUpdateTime > 300_000) { // 5min
            this.buckets.delete(bucket.id);
            if (this.bucketsByUrl.get(bucket.endpoint) === bucket)
               this.bucketsByUrl.delete(bucket.endpoint);

            bucket.dispose();
         }
      }
   }
   public dispose(): void {
      this.bucketsByUrl.clear();
      for (const buckets of this.buckets.values())
         buckets.dispose();
      this.buckets.clear();
   }
}

//@ts-expect-error
export class RateGuardBucket implements Disposable {
   public constructor(
      public readonly id: string,
      public readonly endpoint: string
   ) {
      globalThis.console.log("Rate bucket created: " + id, endpoint)
   }
   public limit: number = Number.MAX_SAFE_INTEGER;
   public remaining: number = Number.MAX_SAFE_INTEGER;
   public reset: number = Date.now();
   protected isRunningTask: ReturnType<typeof setTimeout> | null = null;
   protected promise: Promise<void> = Promise.resolve();
   protected currentResolve: (() => void) | null = null;
   protected currentReject: ((error: unknown) => void) | null = null;
   public lastUpdateTime: number = Date.now();
   public update(headers: Record<string, string>): void {
      this.lastUpdateTime = Date.now();
      const {
         "x-ratelimit-limit": limit,
         "x-ratelimit-remaining": remaining,
         "x-ratelimit-reset": reset,
         //"x-ratelimit-reset-after": resetAfter
      } = headers;
      const newReset = Math.ceil(Number(reset) * 5) * 200 + 100;
      if (newReset <= this.reset && this.remaining < Number(remaining)) return;
      this.limit = Number(limit);
      this.remaining = Number(remaining);
      this.reset = newReset;
      if (this.reset > this.lastUpdateTime) {
         if (this.isRunningTask) clearTimeout(this.isRunningTask);
         this.isRunningTask = setTimeout(() => {
            if (this.currentResolve) this.currentResolve();
            this.currentResolve = null;
            this.currentReject = null;
            this.isRunningTask = null;
         }, Math.max(this.reset - this.lastUpdateTime, 1));
         if (!this.currentResolve) {
            const { promise, resolve, reject } = Promise.withResolvers<void>();
            this.promise = promise;
            this.currentResolve = resolve;
            this.currentReject = reject;
         }
      }
   }
   public isFree(): boolean {
      return this.remaining > 0;
   }
   public async getAwaiter(): Promise<void> {
      if (this.remaining < 1 && this.reset > Date.now()) await this.promise;
   }
   public dispose(): void {
      this.currentReject?.(new ReferenceError("Bucket disposed"));
      this.currentResolve = null;
      this.currentReject = null;
      if (this.isRunningTask !== null)
         clearTimeout(this.isRunningTask);
   }
}


if (Symbol.dispose)
   //@ts-expect-error
   RateGuardBucket.prototype[Symbol.dispose] = RateGuardBucket.prototype.dispose;