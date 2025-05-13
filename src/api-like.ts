import { RequestMethod } from "./enums";

export type FetchLike = (path: string, init?: InitRequestLike)=>Promise<ResponseLike>;
export type ResponseLike = {
    ok: boolean;
    status: number
    statusText: string;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    headers?: Record<string, string | number>
}
export type InitRequestLike = {
    method?: RequestMethod,
    headers?: Record<string, string | number>;
    body?: unknown;
}