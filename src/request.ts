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
        if (!this.headers) this.headers = {};
        if(headers) Object.assign(this.headers, headers);
        const value = await Result.wrap(fetch(REST_API_ENDPOINT + this.path, this));

        // Return immediately
        if (!value.isValid()) return value as Result<T>;

        // Return immediately
        if (!value.data.ok) 
            return new ErrorResult(await DiscordAPIError.from(value.data as ResponseLike, this.path, this.method)) as any;
        
        if(value.data.headers?.[HeaderType.ContentType] === ContentTypes.Json)
             return Result.wrap<T>(value.data.json<T>());
        
        return new ValidResult(null!)
    }
}