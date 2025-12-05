import { RequestMethod } from "./enums";

export type FetchLike = (path: string, init?: InitRequestLike)=>Promise<ResponseLike>;
export type ResponseLike = {
    ok: boolean;
    status: number
    statusText: string;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    readonly headers: Record<string, string | number>
}
export type InitRequestLike = {
    method?: RequestMethod,
    headers?: Record<string, string | number>;
    body?: unknown;
}
export interface NetworkAPI {
    fetch: FetchLike,
}
export class DefaultNetworkAPI {
    public static async fetch(path: string, init?: InitRequestLike): Promise<ResponseLike>{
        const response = await globalThis.fetch(path, init as any);
        return new DefaultResponseAPI(response);
    }
}
export class DefaultResponseAPI implements ResponseLike {
    public readonly response: Response;
    public constructor(response: Response){
        this.response = response;
    }
    public get headers(): Record<string, string | number>{return Object.fromEntries(this.response.headers.entries());}
    public json<T>(): Promise<T> { return this.response.json(); }
    public get ok(): boolean{return this.response.ok;}
    public get status(): number{return this.response.status;}
    public get statusText(): string{return this.response.statusText;}
    public text(): Promise<string>{return this.response.text();}
}