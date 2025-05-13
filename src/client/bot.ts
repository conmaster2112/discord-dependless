import { FetchLike } from "../api-like";
import { HeaderType } from "../enums";
import { RequestJson } from "../request";
import type { 
    DiscordMessageCreateRequest, 
    DiscordSnowflakeType, DiscordCreatedThreadResponse, DiscordCreateForumThreadRequest, 
    DiscordMessageResponse, DiscordCreateTextThreadWithoutMessageRequest, DiscordApplicationCommandResponse,
    DiscordApplicationCommandUpdateRequest
} from "../rest-api-types";
import { JsonAPI } from "../rest-api-types";
import { Result } from "../result";
import { GateWay } from "./gateway";

export class Bot {
    public static fetch: FetchLike = globalThis.fetch as FetchLike;
    public readonly baseHeaders: Record<string, string | number>;
    public readonly token: string;
    protected gateway: GateWay | null;
    public constructor(options: {token: string}){
        this.token = options.token;
        this.baseHeaders = {};
        this.baseHeaders[HeaderType.Authorization] = `Bot ${this.token}`;
    }
    public async connect(intentBits: number): Promise<GateWay>{
        if(this.gateway) 
            throw new ReferenceError("Gateway already initialized");

        const gateway = this.gateway = new GateWay();
        return gateway.connect(this.token, intentBits);
    }
    public async postMessage(forumChannelId: DiscordSnowflakeType, message: DiscordCreateForumThreadRequest | DiscordCreateTextThreadWithoutMessageRequest): Promise<Result<DiscordCreatedThreadResponse>>{
        return this._(JsonAPI.createThread(forumChannelId, message));
    }
    public async sendMessage(channelId: DiscordSnowflakeType, message: DiscordMessageCreateRequest): Promise<Result<DiscordMessageResponse>> {
        return this._(JsonAPI.createMessage(channelId, message));
    }
    public async pinMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): Promise<Result<void>> {
        return this._(JsonAPI.pinMessage(channelId, messageId));
    }
    public async setApplicationCommands(applicationId: DiscordSnowflakeType, commands: DiscordApplicationCommandUpdateRequest[] | null): Promise<Result<DiscordApplicationCommandResponse[] | null>>{
        return this._(JsonAPI.bulkSetApplicationCommands(applicationId, commands))
    }
    /**
     * @internal
     */
    public async _<T>(request: RequestJson<T>): Promise<Result<T>>{ return request.fetch(Bot.fetch, this.baseHeaders); }
}