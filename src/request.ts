import { ErrorResult, Result, ValidResult } from "./result";
import type { FetchLike, InitRequestLike, ResponseLike } from "./api-like";
import { ContentTypes, HeaderType, RequestMethod } from "./enums";
import { DiscordAPIError } from "./discord-error";
import { REST_API_ENDPOINT } from "./constants";

export class RequestInitInfo implements InitRequestLike {
    public headers: Record<string, string | number>;
    public body?: unknown;
    public constructor(
        public readonly method: RequestMethod = RequestMethod.GET
    ) {
        this.headers = {};
    }
    public setBody(data: any, contentType?: string): this {
        this.body = data;

        // Check optional param
        if (contentType)
            this.headers[HeaderType.ContentType] = contentType;

        return this;
    }
}
export class RequestJson<T> extends RequestInitInfo {
    public constructor(
        public readonly path: string,
        public readonly method: RequestMethod) {
        super(method as RequestMethod)
    }
    public async fetch(fetch: FetchLike = globalThis.fetch as unknown as FetchLike, headers?: Record<string, string | number>): Promise<Result<T>> {
        const value = await this.fetchInternal(fetch, headers);
        return this.resolveInternal(value)
    }
    async fetchInternal(fetch: FetchLike = globalThis.fetch as unknown as FetchLike, headers?: Record<string, string | number>): Promise<Result<ResponseLike>> {
        if (!this.headers) this.headers = {};
        if (headers) Object.assign(this.headers, headers);
        return await Result.wrap(fetch(REST_API_ENDPOINT + this.path, this));
    }
    async resolveInternal(value: Result<ResponseLike>): Promise<Result<T>> {
        // Return immediately
        if (!value.isValid()) return value as Result<T>;

        // Return immediately
        if (!value.data.ok)
            return new ErrorResult(await DiscordAPIError.from(value.data as ResponseLike, this.path, this.method)) as any;

        const headers = toLowerKeyMappedObject(value.data.headers ?? {});
        if (headers[HeaderType.ContentType] === ContentTypes.Json)
            return Result.wrap<T>(value.data.json<T>());

        return new ValidResult(null!)
    }
}
export function toLowerKeyMappedObject<T extends Record<string, unknown>>(obj: Record<string, unknown>): T {
    const result: Record<string, unknown> = {};
    for (const key of Object.getOwnPropertyNames(obj)) { result[key.toLowerCase()] = obj[key]; }
    return result as T;
}
