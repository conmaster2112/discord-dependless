import { REST_API_ENDPOINT } from "../constants";
import { DiscordAPIError } from "../discord-error";
import { ContentTypes, HeaderType, RequestMethod } from "../enums";
import type { DiscordMessageCreateRequest, DiscordSnowflakeType, DiscordRestAPIPath, DiscordMessageResponse } from "../rest-api-types";
import { ErrorResult, Result } from "../result";
import { GateWay } from "./gateway";
import { RequestInitInfo } from "./init";

export class Bot {
    public static fetch: typeof globalThis.fetch = globalThis.fetch;
    public readonly baseHeaders: Record<string, string | number>;
    public readonly token: string;
    protected gateway: GateWay | null;
    public constructor(options: {token: string}){
        this.token = options.token;
        this.baseHeaders = {};
        this.baseHeaders[HeaderType.Authorization] = `Bot ${this.token}`;
    }
    public setUserAgent(userAgent: string){
        this.baseHeaders[HeaderType.UserAgent] = userAgent;
        return this;
    }
    public async connect(intentBits: number): Promise<GateWay>{
        if(this.gateway) 
            throw new ReferenceError("Gateway already initialized");

        const gateway = this.gateway = new GateWay();
        return gateway.connect(this.token, intentBits);
    }
    public async sendMessage(channelId: DiscordSnowflakeType, message: DiscordMessageCreateRequest): Promise<Result<DiscordMessageResponse>> {
        return await this.requestJson<DiscordMessageResponse>(
            `/channels/${channelId}/messages`, 
            this.newRequest(RequestMethod.POST)
            .setBody(JSON.stringify(message), ContentTypes.Json)
        );
    }
    protected async requestJson<T>(path: DiscordRestAPIPath, init: RequestInitInfo): Promise<Result<T>>{
        const response = await this.api(path, init);

        // Is not valid
        if(!response.isValid()) return response as any;

        return await Result.wrap<T>(response.data.json());
    }
    protected async api(path: DiscordRestAPIPath, init: RequestInitInfo): Promise<Result<Response>> {
        if(!init.headers) init.headers = this.baseHeaders as any;
        const value = await Result.wrap(Bot.fetch(REST_API_ENDPOINT + path, init as any));

        // Return immediately
        if(!value.isValid()) return value;

        // Return immediately
        if(value.data.ok) return value;

        return new ErrorResult(new DiscordAPIError(path, init.method??"GET", value.data)) as any;
    }
    protected newRequest(method: RequestMethod): RequestInitInfo{
        const info = new RequestInitInfo(method);

        // Assign data
        Object.assign(info.headers, this.baseHeaders);

        // Return value
        return info;
    }
}