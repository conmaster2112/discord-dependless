import { DiscordUserResponse, DiscordSnowflakeType,DiscordMessageResponse, DiscordGuildMemberResponse, DiscordGuildResponse, DiscordGuildChannelResponse } from "../rest";

export interface GatewayReadyEvent {
    user_settings: {};
    user: Omit<DiscordUserResponse, 'public_flags'> & {verified: boolean, primary_guild: unknown, mfa_enabled: boolean, email: string | null};
    session_type: string;
    session_id: string;
    resume_gateway_url: string;
    relationships: [];
    private_channels: [];
    presences: [];
    guilds: {
        unavailable: boolean;
        id: DiscordSnowflakeType;
    }[];
    guild_join_requests: [];
    geo_ordered_rtc_regions: string[];
    game_relationships: [];
    auth: {};
    application: {
        id: DiscordSnowflakeType;
        flags: number;
    };
}

export interface GateWayInteractionCreateEvent {
    version: number;
    type: number;
    token: string;
    member?: DiscordGuildMemberResponse
    user?: DiscordUserResponse;
    locale?: string;
    id: DiscordSnowflakeType;
    guild_locale?: string;
    guild_id?: DiscordSnowflakeType;
    guild?: DiscordGuildResponse;
    entitlements: [];
    entitlement_sku_ids: [];
    data?: {
        type: number;
        options: CommandOption[];
        name: string;
        id: DiscordSnowflakeType;
    };
    context?: number;
    channel_id?: DiscordSnowflakeType;
    channel?: Omit<DiscordGuildChannelResponse, 'guild_id' | 'last_message_id' | 'last_pin_timestamp' | 'rate_limit_per_user' | 'topic' | 'default_auto_archive_duration' | 'default_thread_rate_limit_per_user' | 'default_sort_order' | 'default_forum_layout' | 'default_tag_setting' | 'hd_streaming_until' | 'hd_streaming_buyer_id' | 'bitrate' | 'user_limit' | 'rtc_region' | 'video_quality_mode' | 'permission_overwrites' | 'nsfw' | 'available_tags'>;
    authorizing_integration_owners?: {
        [key: string]: DiscordSnowflakeType;
    };
    attachment_size_limit?: number;
    application_id: DiscordSnowflakeType;
    app_permissions?: string;
    message?: DiscordMessageResponse;
}
export type CommandOption = SubCommandOption | StringOption | IntegerOption | NumberOption | BooleanOption | UserOption | ChannelOption | RoleOption | MentionableOption | AttachmentOption;

type BaseCommandOption = {
    name: string;
    focused?: boolean;
}

type SubCommandOption = BaseCommandOption & {
    type: 1;
    options?: CommandOption[];
}

type StringOption = BaseCommandOption & {
    type: 3;
    value: string;
}

type IntegerOption = BaseCommandOption & {
    type: 4;
    value: number;
}

type BooleanOption = BaseCommandOption & {
    type: 5;
    value: boolean;
}

type UserOption = BaseCommandOption & {
    type: 6;
    value: DiscordSnowflakeType;
}

type ChannelOption = BaseCommandOption & {
    type: 7;
    value: DiscordSnowflakeType;
}

type RoleOption = BaseCommandOption & {
    type: 8;
    value: DiscordSnowflakeType;
}

type MentionableOption = BaseCommandOption & {
    type: 9;
    value: DiscordSnowflakeType;
}

type NumberOption = BaseCommandOption & {
    type: 10;
    value: number;
}

type AttachmentOption = BaseCommandOption & {
    type: 11;
    value: DiscordSnowflakeType;
}
