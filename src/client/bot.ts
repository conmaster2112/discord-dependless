import { DefaultNetworkAPI, FetchLike } from "../api-like";
import { HeaderType } from "../enums";
import { RequestJson } from "../request";
import {
    DiscordMessageCreateRequest,
    DiscordSnowflakeType, DiscordCreatedThreadResponse, DiscordCreateForumThreadRequest,
    DiscordMessageResponse, DiscordCreateTextThreadWithoutMessageRequest, DiscordApplicationCommandResponse,
    DiscordApplicationCommandUpdateRequest,
    deleteMessage,
    bulkDeleteMessages,
    getMessage,
    listMessages
} from "../rest";
import { createThread, createMessage, createPin, bulkSetApplicationCommands, bulkSetGuildApplicationCommands } from "../rest";
import { Result } from "../result";
import { GateWay } from "./gateway";
import { RateGuardManager } from "./rate-guard";

export class Bot {
    public static fetch: FetchLike = DefaultNetworkAPI.fetch
    public readonly baseHeaders: Record<string, string | number>;
    public readonly token: string;
    public readonly rateManager: RateGuardManager = new RateGuardManager();
    protected gateway: GateWay | null = null;
    public constructor(options: { token: string }) {
        this.token = options.token;
        this.baseHeaders = {};
        this.baseHeaders[HeaderType.Authorization] = `Bot ${this.token}`;
        setInterval(() => {
            this.rateManager.collect();
        }, 30_000)?.unref();
    }
    public async connect(intentBits: number): Promise<GateWay> {
        if (this.gateway)
            throw new ReferenceError("Gateway already initialized");

        const gateway = this.gateway = new GateWay();
        return gateway.connect(this.token, intentBits);
    }
    public async postMessage(forumChannelId: DiscordSnowflakeType, message: DiscordCreateForumThreadRequest | DiscordCreateTextThreadWithoutMessageRequest): Promise<Result<DiscordCreatedThreadResponse>> {
        return this._(createThread(forumChannelId, message));
    }
    public async sendMessage(channelId: DiscordSnowflakeType, message: DiscordMessageCreateRequest): Promise<Result<DiscordMessageResponse>> {
        return this._(createMessage(channelId, message));
    }
    public async pinMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): Promise<Result<void>> {
        return this._(createPin(channelId, messageId));
    }
    public async setGuildCommands(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commands: DiscordApplicationCommandUpdateRequest[] | null): Promise<Result<DiscordApplicationCommandResponse[] | null>> {
        return this._(bulkSetGuildApplicationCommands(applicationId, guildId, commands));
    }
    public async setApplicationCommands(applicationId: DiscordSnowflakeType, commands: DiscordApplicationCommandUpdateRequest[] | null): Promise<Result<DiscordApplicationCommandResponse[] | null>> {
        return this._(bulkSetApplicationCommands(applicationId, commands));
    }
    public async deleteMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): Promise<Result<void>> {
        return this._(deleteMessage(channelId, messageId))
    }
    public async batchDeleteMessage(channelId: DiscordSnowflakeType, messages: DiscordSnowflakeType[]): Promise<Result<void>> {
        return this._(bulkDeleteMessages(channelId, { messages }));
    }
    public async getLastMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): Promise<Result<DiscordMessageResponse>> {
        return this._(getMessage(channelId, messageId))
    }
    public async getLocalMessages(channelId: DiscordSnowflakeType, limit: number, afterMessageId?: DiscordSnowflakeType): Promise<Result<DiscordMessageResponse[] | null>> {
        let hello = listMessages(channelId, { limit, after: afterMessageId });
        return this._(hello);
    }
    public async _<T>(request: RequestJson<T>): Promise<Result<T>> {
        while (true) {
            await this.rateManager.getByURL(request.path, request.method)?.getAwaiter()?.catch(_ => null);
            const base = await request.fetchInternal(Bot.fetch, this.baseHeaders);
            if (!base.isValid()) return base as Result<T>;
            const bucket = this.rateManager.update(request.path, request.method, base.data.headers);
            if (base.data.status === 429) {
                await bucket?.getAwaiter();
                continue;
            }
            return request.resolveInternal(base);
        }
    }
}