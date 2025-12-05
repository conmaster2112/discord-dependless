
import { RequestJson } from "../request";
import { RequestMethod } from "../enums";
export type DiscordRawRestAPIPath = `/applications/@me` |
    `/applications/${DiscordSnowflakeType}` |
    `/applications/${DiscordSnowflakeType}/activity-instances/${string}` |
    `/applications/${DiscordSnowflakeType}/attachment` |
    `/applications/${DiscordSnowflakeType}/commands` |
    `/applications/${DiscordSnowflakeType}/commands/${DiscordSnowflakeType}` |
    `/applications/${DiscordSnowflakeType}/emojis` |
    `/applications/${DiscordSnowflakeType}/emojis/${DiscordSnowflakeType}` |
    `/applications/${DiscordSnowflakeType}/entitlements` |
    `/applications/${DiscordSnowflakeType}/entitlements/${DiscordSnowflakeType}` |
    `/applications/${DiscordSnowflakeType}/entitlements/${DiscordSnowflakeType}/consume` |
    `/applications/${DiscordSnowflakeType}/guilds/${DiscordSnowflakeType}/commands` |
    `/applications/${DiscordSnowflakeType}/guilds/${DiscordSnowflakeType}/commands/permissions` |
    `/applications/${DiscordSnowflakeType}/guilds/${DiscordSnowflakeType}/commands/${DiscordSnowflakeType}` |
    `/applications/${DiscordSnowflakeType}/guilds/${DiscordSnowflakeType}/commands/${DiscordSnowflakeType}/permissions` |
    `/applications/${DiscordSnowflakeType}/role-connections/metadata` |
    `/channels/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/followers` |
    `/channels/${DiscordSnowflakeType}/invites` |
    `/channels/${DiscordSnowflakeType}/messages` |
    `/channels/${DiscordSnowflakeType}/messages/bulk-delete` |
    `/channels/${DiscordSnowflakeType}/messages/pins` |
    `/channels/${DiscordSnowflakeType}/messages/pins/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/crosspost` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/reactions` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/reactions/${string}` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/reactions/${string}/@me` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/reactions/${string}/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/messages/${DiscordSnowflakeType}/threads` |
    `/channels/${DiscordSnowflakeType}/permissions/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/pins` |
    `/channels/${DiscordSnowflakeType}/pins/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/polls/${DiscordSnowflakeType}/answers/${number}` |
    `/channels/${DiscordSnowflakeType}/polls/${DiscordSnowflakeType}/expire` |
    `/channels/${DiscordSnowflakeType}/recipients/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/send-soundboard-sound` |
    `/channels/${DiscordSnowflakeType}/thread-members` |
    `/channels/${DiscordSnowflakeType}/thread-members/@me` |
    `/channels/${DiscordSnowflakeType}/thread-members/${DiscordSnowflakeType}` |
    `/channels/${DiscordSnowflakeType}/threads` |
    `/channels/${DiscordSnowflakeType}/threads/archived/private` |
    `/channels/${DiscordSnowflakeType}/threads/archived/public` |
    `/channels/${DiscordSnowflakeType}/threads/search` |
    `/channels/${DiscordSnowflakeType}/typing` |
    `/channels/${DiscordSnowflakeType}/users/@me/threads/archived/private` |
    `/channels/${DiscordSnowflakeType}/webhooks` |
    `/gateway` |
    `/gateway/bot` |
    `/guilds/templates/${string}` |
    `/guilds/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/audit-logs` |
    `/guilds/${DiscordSnowflakeType}/auto-moderation/rules` |
    `/guilds/${DiscordSnowflakeType}/auto-moderation/rules/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/bans` |
    `/guilds/${DiscordSnowflakeType}/bans/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/bulk-ban` |
    `/guilds/${DiscordSnowflakeType}/channels` |
    `/guilds/${DiscordSnowflakeType}/emojis` |
    `/guilds/${DiscordSnowflakeType}/emojis/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/integrations` |
    `/guilds/${DiscordSnowflakeType}/integrations/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/invites` |
    `/guilds/${DiscordSnowflakeType}/members` |
    `/guilds/${DiscordSnowflakeType}/members/@me` |
    `/guilds/${DiscordSnowflakeType}/members/search` |
    `/guilds/${DiscordSnowflakeType}/members/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/members/${DiscordSnowflakeType}/roles/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/new-member-welcome` |
    `/guilds/${DiscordSnowflakeType}/onboarding` |
    `/guilds/${DiscordSnowflakeType}/preview` |
    `/guilds/${DiscordSnowflakeType}/prune` |
    `/guilds/${DiscordSnowflakeType}/regions` |
    `/guilds/${DiscordSnowflakeType}/roles` |
    `/guilds/${DiscordSnowflakeType}/roles/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/scheduled-events` |
    `/guilds/${DiscordSnowflakeType}/scheduled-events/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/scheduled-events/${DiscordSnowflakeType}/users` |
    `/guilds/${DiscordSnowflakeType}/soundboard-sounds` |
    `/guilds/${DiscordSnowflakeType}/soundboard-sounds/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/stickers` |
    `/guilds/${DiscordSnowflakeType}/stickers/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/templates` |
    `/guilds/${DiscordSnowflakeType}/templates/${string}` |
    `/guilds/${DiscordSnowflakeType}/threads/active` |
    `/guilds/${DiscordSnowflakeType}/vanity-url` |
    `/guilds/${DiscordSnowflakeType}/voice-states/@me` |
    `/guilds/${DiscordSnowflakeType}/voice-states/${DiscordSnowflakeType}` |
    `/guilds/${DiscordSnowflakeType}/webhooks` |
    `/guilds/${DiscordSnowflakeType}/welcome-screen` |
    `/guilds/${DiscordSnowflakeType}/widget` |
    `/guilds/${DiscordSnowflakeType}/widget.json` |
    `/guilds/${DiscordSnowflakeType}/widget.png` |
    `/interactions/${DiscordSnowflakeType}/${string}/callback` |
    `/invites/${string}` |
    `/lobbies` |
    `/lobbies/${DiscordSnowflakeType}` |
    `/lobbies/${DiscordSnowflakeType}/channel-linking` |
    `/lobbies/${DiscordSnowflakeType}/members/@me` |
    `/lobbies/${DiscordSnowflakeType}/members/@me/invites` |
    `/lobbies/${DiscordSnowflakeType}/members/bulk` |
    `/lobbies/${DiscordSnowflakeType}/members/${DiscordSnowflakeType}` |
    `/lobbies/${DiscordSnowflakeType}/members/${DiscordSnowflakeType}/invites` |
    `/lobbies/${DiscordSnowflakeType}/messages` |
    `/oauth2/@me` |
    `/oauth2/applications/@me` |
    `/oauth2/keys` |
    `/oauth2/userinfo` |
    `/partner-sdk/provisional-accounts/unmerge` |
    `/partner-sdk/provisional-accounts/unmerge/bot` |
    `/partner-sdk/token` |
    `/partner-sdk/token/bot` |
    `/soundboard-default-sounds` |
    `/stage-instances` |
    `/stage-instances/${DiscordSnowflakeType}` |
    `/sticker-packs` |
    `/sticker-packs/${DiscordSnowflakeType}` |
    `/stickers/${DiscordSnowflakeType}` |
    `/users/@me` |
    `/users/@me/applications/${DiscordSnowflakeType}/entitlements` |
    `/users/@me/applications/${DiscordSnowflakeType}/role-connection` |
    `/users/@me/channels` |
    `/users/@me/connections` |
    `/users/@me/guilds` |
    `/users/@me/guilds/${DiscordSnowflakeType}` |
    `/users/@me/guilds/${DiscordSnowflakeType}/member` |
    `/users/${DiscordSnowflakeType}` |
    `/voice/regions` |
    `/webhooks/${DiscordSnowflakeType}` |
    `/webhooks/${DiscordSnowflakeType}/${string}` |
    `/webhooks/${DiscordSnowflakeType}/${string}/github` |
    `/webhooks/${DiscordSnowflakeType}/${string}/messages/@original` |
    `/webhooks/${DiscordSnowflakeType}/${string}/messages/${DiscordSnowflakeType}` |
    `/webhooks/${DiscordSnowflakeType}/${string}/slack`;
export type DiscordRestAPIPath = DiscordRawRestAPIPath | `${DiscordRawRestAPIPath}?${string}`;

export type DiscordAccountResponse = { id: string, name?: string | null };  //object
export type DiscordActionRowComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, components: (DiscordButtonComponentForMessageRequest | DiscordChannelSelectComponentForMessageRequest | DiscordMentionableSelectComponentForMessageRequest | DiscordRoleSelectComponentForMessageRequest | DiscordStringSelectComponentForMessageRequest | DiscordUserSelectComponentForMessageRequest)[] };  //object
export type DiscordActionRowComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, components: DiscordTextInputComponentForModalRequest[] };  //object
export type DiscordActionRowComponentResponse = { type: (DiscordMessageComponentTypes), id: number, components: (DiscordButtonComponentResponse | DiscordChannelSelectComponentResponse | DiscordMentionableSelectComponentResponse | DiscordRoleSelectComponentResponse | DiscordStringSelectComponentResponse | DiscordTextInputComponentResponse | DiscordUserSelectComponentResponse)[] };  //object
export type DiscordActivitiesAttachmentResponse = { attachment: DiscordAttachmentResponse };  //object
export type DiscordAfkTimeouts = (60 | 300 | 900 | 1800 | 3600);  //integer
export type DiscordAllowedMentionTypes = ("users" | "roles" | "everyone");  //string
export type DiscordApplicationCommandAttachmentOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null };  //object
export type DiscordApplicationCommandAttachmentOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean };  //object
export type DiscordApplicationCommandAutocompleteCallbackRequest = { type: (DiscordInteractionCallbackTypes), data: (DiscordInteractionApplicationCommandAutocompleteCallbackIntegerData | DiscordInteractionApplicationCommandAutocompleteCallbackNumberData | DiscordInteractionApplicationCommandAutocompleteCallbackStringData) };  //object
export type DiscordApplicationCommandBooleanOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null };  //object
export type DiscordApplicationCommandBooleanOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean };  //object
export type DiscordApplicationCommandChannelOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, channel_types?: DiscordChannelTypes[] | null };  //object
export type DiscordApplicationCommandChannelOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, channel_types?: DiscordChannelTypes[] };  //object
export type DiscordApplicationCommandCreateRequest = { name: string, name_localizations?: object | null, description?: string | null, description_localizations?: object | null, options?: (DiscordApplicationCommandAttachmentOption | DiscordApplicationCommandBooleanOption | DiscordApplicationCommandChannelOption | DiscordApplicationCommandIntegerOption | DiscordApplicationCommandMentionableOption | DiscordApplicationCommandNumberOption | DiscordApplicationCommandRoleOption | DiscordApplicationCommandStringOption | DiscordApplicationCommandSubcommandGroupOption | DiscordApplicationCommandSubcommandOption | DiscordApplicationCommandUserOption)[] | null, default_member_permissions?: number | null, dm_permission?: boolean | null, contexts?: DiscordInteractionContextType[] | null, integration_types?: DiscordApplicationIntegrationType[] | null, handler?: (null | DiscordApplicationCommandHandler), type?: (null | DiscordApplicationCommandType) };  //object
export type DiscordApplicationCommandHandler = number;  //integer
export type DiscordApplicationCommandIntegerOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, autocomplete?: boolean | null, choices?: DiscordApplicationCommandOptionIntegerChoice[] | null, min_value?: (null | DiscordInt53Type), max_value?: (null | DiscordInt53Type) };  //object
export type DiscordApplicationCommandIntegerOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, autocomplete?: boolean, choices?: DiscordApplicationCommandOptionIntegerChoiceResponse[], min_value?: DiscordInt53Type, max_value?: DiscordInt53Type };  //object
export type DiscordApplicationCommandInteractionMetadataResponse = { id: DiscordSnowflakeType, type: (DiscordInteractionTypes), user?: DiscordUserResponse, authorizing_integration_owners: object, original_response_message_id?: DiscordSnowflakeType, target_user?: DiscordUserResponse, target_message_id?: DiscordSnowflakeType };  //object
export type DiscordApplicationCommandMentionableOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null };  //object
export type DiscordApplicationCommandMentionableOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean };  //object
export type DiscordApplicationCommandNumberOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, autocomplete?: boolean | null, choices?: DiscordApplicationCommandOptionNumberChoice[] | null, min_value?: number | null, max_value?: number | null };  //object
export type DiscordApplicationCommandNumberOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, autocomplete?: boolean, choices?: DiscordApplicationCommandOptionNumberChoiceResponse[], min_value?: number, max_value?: number };  //object
export type DiscordApplicationCommandOptionIntegerChoice = { name: string, name_localizations?: object | null, value: DiscordInt53Type };  //object
export type DiscordApplicationCommandOptionIntegerChoiceResponse = { name: string, name_localized?: string, name_localizations?: object | null, value: DiscordInt53Type };  //object
export type DiscordApplicationCommandOptionNumberChoice = { name: string, name_localizations?: object | null, value: number };  //object
export type DiscordApplicationCommandOptionNumberChoiceResponse = { name: string, name_localized?: string, name_localizations?: object | null, value: number };  //object
export type DiscordApplicationCommandOptionStringChoice = { name: string, name_localizations?: object | null, value: string };  //object
export type DiscordApplicationCommandOptionStringChoiceResponse = { name: string, name_localized?: string, name_localizations?: object | null, value: string };  //object
export type DiscordApplicationCommandOptionType = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);  //integer
export type DiscordApplicationCommandPatchRequestPartial = { name?: string, name_localizations?: object | null, description?: string | null, description_localizations?: object | null, options?: (DiscordApplicationCommandAttachmentOption | DiscordApplicationCommandBooleanOption | DiscordApplicationCommandChannelOption | DiscordApplicationCommandIntegerOption | DiscordApplicationCommandMentionableOption | DiscordApplicationCommandNumberOption | DiscordApplicationCommandRoleOption | DiscordApplicationCommandStringOption | DiscordApplicationCommandSubcommandGroupOption | DiscordApplicationCommandSubcommandOption | DiscordApplicationCommandUserOption)[] | null, default_member_permissions?: number | null, dm_permission?: boolean | null, contexts?: DiscordInteractionContextType[] | null, integration_types?: DiscordApplicationIntegrationType[] | null, handler?: (null | DiscordApplicationCommandHandler) };  //object
export type DiscordApplicationCommandPermission = { id: DiscordSnowflakeType, type: DiscordApplicationCommandPermissionType, permission: boolean };  //object
export type DiscordApplicationCommandPermissionType = (1 | 2 | 3);  //integer
export type DiscordApplicationCommandResponse = { id: DiscordSnowflakeType, application_id: DiscordSnowflakeType, version: DiscordSnowflakeType, default_member_permissions?: string | null, type: DiscordApplicationCommandType, name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, guild_id?: DiscordSnowflakeType, dm_permission?: boolean, contexts?: DiscordInteractionContextType[] | null, integration_types?: DiscordApplicationIntegrationType[], options?: (DiscordApplicationCommandAttachmentOptionResponse | DiscordApplicationCommandBooleanOptionResponse | DiscordApplicationCommandChannelOptionResponse | DiscordApplicationCommandIntegerOptionResponse | DiscordApplicationCommandMentionableOptionResponse | DiscordApplicationCommandNumberOptionResponse | DiscordApplicationCommandRoleOptionResponse | DiscordApplicationCommandStringOptionResponse | DiscordApplicationCommandSubcommandGroupOptionResponse | DiscordApplicationCommandSubcommandOptionResponse | DiscordApplicationCommandUserOptionResponse)[], nsfw?: boolean };  //object
export type DiscordApplicationCommandRoleOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null };  //object
export type DiscordApplicationCommandRoleOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean };  //object
export type DiscordApplicationCommandStringOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, autocomplete?: boolean | null, min_length?: number | null, max_length?: number | null, choices?: DiscordApplicationCommandOptionStringChoice[] | null };  //object
export type DiscordApplicationCommandStringOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, autocomplete?: boolean, choices?: DiscordApplicationCommandOptionStringChoiceResponse[], min_length?: number, max_length?: number };  //object
export type DiscordApplicationCommandSubcommandGroupOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, options?: DiscordApplicationCommandSubcommandOption[] | null };  //object
export type DiscordApplicationCommandSubcommandGroupOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, options?: DiscordApplicationCommandSubcommandOptionResponse[] };  //object
export type DiscordApplicationCommandSubcommandOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null, options?: (DiscordApplicationCommandAttachmentOption | DiscordApplicationCommandBooleanOption | DiscordApplicationCommandChannelOption | DiscordApplicationCommandIntegerOption | DiscordApplicationCommandMentionableOption | DiscordApplicationCommandNumberOption | DiscordApplicationCommandRoleOption | DiscordApplicationCommandStringOption | DiscordApplicationCommandUserOption)[] | null };  //object
export type DiscordApplicationCommandSubcommandOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean, options?: (DiscordApplicationCommandAttachmentOptionResponse | DiscordApplicationCommandBooleanOptionResponse | DiscordApplicationCommandChannelOptionResponse | DiscordApplicationCommandIntegerOptionResponse | DiscordApplicationCommandMentionableOptionResponse | DiscordApplicationCommandNumberOptionResponse | DiscordApplicationCommandRoleOptionResponse | DiscordApplicationCommandStringOptionResponse | DiscordApplicationCommandUserOptionResponse)[] };  //object
export type DiscordApplicationCommandType = (1 | 2 | 3 | 4);  //integer
export type DiscordApplicationCommandUpdateRequest = { name: string, name_localizations?: object | null, description?: string | null, description_localizations?: object | null, options?: (DiscordApplicationCommandAttachmentOption | DiscordApplicationCommandBooleanOption | DiscordApplicationCommandChannelOption | DiscordApplicationCommandIntegerOption | DiscordApplicationCommandMentionableOption | DiscordApplicationCommandNumberOption | DiscordApplicationCommandRoleOption | DiscordApplicationCommandStringOption | DiscordApplicationCommandSubcommandGroupOption | DiscordApplicationCommandSubcommandOption | DiscordApplicationCommandUserOption)[] | null, default_member_permissions?: number | null, dm_permission?: boolean | null, contexts?: DiscordInteractionContextType[] | null, integration_types?: DiscordApplicationIntegrationType[] | null, handler?: (null | DiscordApplicationCommandHandler), type?: (null | DiscordApplicationCommandType), id?: (null | DiscordSnowflakeType) };  //object
export type DiscordApplicationCommandUserOption = { type: (DiscordApplicationCommandOptionType), name: string, name_localizations?: object | null, description: string, description_localizations?: object | null, required?: boolean | null };  //object
export type DiscordApplicationCommandUserOptionResponse = { type: (DiscordApplicationCommandOptionType), name: string, name_localized?: string, name_localizations?: object | null, description: string, description_localized?: string, description_localizations?: object | null, required?: boolean };  //object
export type DiscordApplicationExplicitContentFilterTypes = (0 | 1);  //integer
export type DiscordApplicationFormPartial = { description?: { default: string, localizations?: object | null } | null, icon?: string | null, cover_image?: string | null, team_id?: (null | DiscordSnowflakeType), flags?: number | null, interactions_endpoint_url?: string | null, explicit_content_filter?: (null | DiscordApplicationExplicitContentFilterTypes), max_participants?: number | null, type?: (null | DiscordApplicationTypes), tags?: string[] | null, custom_install_url?: string | null, install_params?: (null | DiscordApplicationOAuth2InstallParams), role_connections_verification_url?: string | null, integration_types_config?: object | null };  //object
export type DiscordApplicationIdentityProviderAuthType = ("OIDC" | "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" | "EPIC_ONLINE_SERVICES_ID_TOKEN" | "STEAM_SESSION_TICKET" | "UNITY_SERVICES_ID_TOKEN" | "DISCORD_BOT_ISSUED_ACCESS_TOKEN" | "APPLE_ID_TOKEN" | "PLAYSTATION_NETWORK_ID_TOKEN");  //string
export type DiscordApplicationIncomingWebhookResponse = { application_id?: (null | DiscordSnowflakeType), avatar?: string | null, channel_id?: (null | DiscordSnowflakeType), guild_id?: (null | DiscordSnowflakeType), id: DiscordSnowflakeType, name: string, type: (DiscordWebhookTypes), user?: DiscordUserResponse };  //object
export type DiscordApplicationIntegrationType = (0 | 1);  //integer
export type DiscordApplicationIntegrationTypeConfiguration = { oauth2_install_params?: (null | DiscordApplicationOAuth2InstallParams) };  //object
export type DiscordApplicationIntegrationTypeConfigurationResponse = { oauth2_install_params?: DiscordApplicationOAuth2InstallParamsResponse };  //object
export type DiscordApplicationOAuth2InstallParams = { scopes?: (DiscordOAuth2Scopes)[] | null, permissions?: number | null };  //object
export type DiscordApplicationOAuth2InstallParamsResponse = { scopes: (DiscordOAuth2Scopes)[], permissions: string };  //object
export type DiscordApplicationResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description: string, type?: (null | DiscordApplicationTypes), cover_image?: string, primary_sku_id?: DiscordSnowflakeType, bot?: DiscordUserResponse, slug?: string, guild_id?: DiscordSnowflakeType, rpc_origins?: string | null[], bot_public?: boolean, bot_require_code_grant?: boolean, terms_of_service_url?: string, privacy_policy_url?: string, custom_install_url?: string, install_params?: DiscordApplicationOAuth2InstallParamsResponse, integration_types_config?: object, verify_key: string, flags: number, max_participants?: number | null, tags?: string[] };  //object
export type DiscordApplicationRoleConnectionsMetadataItemRequest = { type: DiscordMetadataItemTypes, key: string, name: string, name_localizations?: object | null, description: string, description_localizations?: object | null };  //object
export type DiscordApplicationRoleConnectionsMetadataItemResponse = { type: DiscordMetadataItemTypes, key: string, name: string, name_localizations?: object | null, description: string, description_localizations?: object | null };  //object
export type DiscordApplicationTypes = (4);  //integer
export type DiscordApplicationUserRoleConnectionResponse = { platform_name?: string | null, platform_username?: string | null, metadata?: object };  //object
export type DiscordAttachmentResponse = { id: DiscordSnowflakeType, filename: string, size: number, url: string, proxy_url: string, width?: number, height?: number, duration_secs?: number, waveform?: string, description?: string, content_type?: string, ephemeral?: boolean, title?: string | null, application?: DiscordApplicationResponse, clip_created_at?: string, clip_participants?: DiscordUserResponse[] };  //object
export type DiscordAuditLogActionTypes = (1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121 | 130 | 131 | 132 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 150 | 151 | 163 | 164 | 165 | 166 | 167 | 171 | 172 | 180 | 190 | 191 | 192 | 193 | 211);  //integer
export type DiscordAuditLogEntryResponse = { id: DiscordSnowflakeType, action_type: DiscordAuditLogActionTypes, user_id?: (null | DiscordSnowflakeType), target_id?: (null | DiscordSnowflakeType), changes?: DiscordAuditLogObjectChangeResponse[], options?: object, reason?: string };  //object
export type DiscordAuditLogObjectChangeResponse = { key?: string | null, new_value?: unknown, old_value?: unknown };  //object
export type DiscordAutomodActionType = (1 | 2 | 3 | 4);  //integer
export type DiscordAutomodEventType = (1 | 2);  //integer
export type DiscordAutomodKeywordPresetType = (1 | 2 | 3);  //integer
export type DiscordAutomodTriggerType = (1 | 2 | 3 | 4 | 5);  //integer
export type DiscordAvailableLocalesEnum = ("ar" | "bg" | "cs" | "da" | "de" | "el" | "en-GB" | "en-US" | "es-419" | "es-ES" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "sv-SE" | "th" | "tr" | "uk" | "vi" | "zh-CN" | "zh-TW");  //string
export type DiscordBanUserFromGuildRequest = { delete_message_seconds?: number | null, delete_message_days?: number | null };  //object
export type DiscordBaseCreateMessageCreateRequest = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), sticker_ids?: DiscordSnowflakeType[] | null, components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, flags?: number | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), shared_client_theme?: (null | DiscordCustomClientThemeShareRequest), confetti_potion?: (null | DiscordConfettiPotionCreateRequest) };  //object
export type DiscordBasicApplicationResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description: string, type?: (null | DiscordApplicationTypes), cover_image?: string, primary_sku_id?: DiscordSnowflakeType, bot?: DiscordUserResponse };  //object
export type DiscordBasicGuildMemberResponse = { avatar?: string | null, avatar_decoration_data?: (null | DiscordUserAvatarDecorationResponse), banner?: string | null, communication_disabled_until?: string | null, flags: number, joined_at: string, nick?: string | null, pending: boolean, premium_since?: string | null, roles: DiscordSnowflakeType[], collectibles?: (null | DiscordUserCollectiblesResponse) };  //object
export type DiscordBasicMessageResponse = { type: DiscordMessageType, content: string, mentions: DiscordUserResponse[], mention_roles: DiscordSnowflakeType[], attachments: DiscordMessageAttachmentResponse[], embeds: DiscordMessageEmbedResponse[], timestamp: string, edited_timestamp?: string | null, flags: number, components: (DiscordActionRowComponentResponse | DiscordContainerComponentResponse | DiscordFileComponentResponse | DiscordMediaGalleryComponentResponse | DiscordSectionComponentResponse | DiscordSeparatorComponentResponse | DiscordTextDisplayComponentResponse)[], stickers?: (DiscordGuildStickerResponse | DiscordStandardStickerResponse)[], sticker_items?: DiscordMessageStickerItemResponse[], id: DiscordSnowflakeType, channel_id: DiscordSnowflakeType, author: DiscordUserResponse, pinned: boolean, mention_everyone: boolean, tts: boolean, call?: DiscordMessageCallResponse, activity?: DiscordMessageActivityResponse, application?: DiscordBasicApplicationResponse, application_id?: DiscordSnowflakeType, interaction?: DiscordMessageInteractionResponse, nonce?: (number | string | null), webhook_id?: DiscordSnowflakeType, message_reference?: DiscordMessageReferenceResponse, thread?: DiscordThreadResponse, mention_channels?: (null | DiscordMessageMentionChannelResponse)[], role_subscription_data?: DiscordMessageRoleSubscriptionDataResponse, purchase_notification?: DiscordPurchaseNotificationResponse, position?: number, resolved?: DiscordResolvedObjectsResponse, poll?: DiscordPollResponse, shared_client_theme?: (null | DiscordCustomClientThemeResponse), interaction_metadata?: (DiscordApplicationCommandInteractionMetadataResponse | DiscordMessageComponentInteractionMetadataResponse | DiscordModalSubmitInteractionMetadataResponse), message_snapshots?: DiscordMessageSnapshotResponse[] };  //object
export type DiscordBlockMessageAction = { type: (DiscordAutomodActionType), metadata?: (null | DiscordBlockMessageActionMetadata) };  //object
export type DiscordBlockMessageActionMetadata = { custom_message?: string | null };  //object
export type DiscordBlockMessageActionMetadataResponse = { custom_message?: string };  //object
export type DiscordBlockMessageActionResponse = { type: (DiscordAutomodActionType), metadata: DiscordBlockMessageActionMetadataResponse };  //object
export type DiscordBotAccountPatchRequest = { username: string, avatar?: string | null, banner?: string | null };  //object
export type DiscordBotAddGuildMemberRequest = { nick?: string | null, roles?: DiscordSnowflakeType[] | null, mute?: boolean | null, deaf?: boolean | null, access_token: string, flags?: number | null };  //object
export type DiscordBulkBanUsersRequest = { user_ids: DiscordSnowflakeType[], delete_message_seconds?: number | null };  //object
export type DiscordBulkBanUsersResponse = { banned_users: DiscordSnowflakeType[], failed_users: DiscordSnowflakeType[] };  //object
export type DiscordBulkLobbyMemberRequest = { id: DiscordSnowflakeType, metadata?: object | null, flags?: (null | number), remove_member?: boolean | null };  //object
export type DiscordButtonComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id?: string | null, style: DiscordButtonStyleTypes, label?: string | null, disabled?: boolean | null, url?: string | null, sku_id?: (null | DiscordSnowflakeType), emoji?: (null | DiscordComponentEmojiForRequest) };  //object
export type DiscordButtonComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id?: string, style: DiscordButtonStyleTypes, label?: string, disabled?: boolean, emoji?: DiscordComponentEmojiResponse, url?: string | null, sku_id?: DiscordSnowflakeType };  //object
export type DiscordButtonStyleTypes = (1 | 2 | 3 | 4 | 5 | 6);  //integer
export type DiscordChannelFollowerResponse = { channel_id: DiscordSnowflakeType, webhook_id: DiscordSnowflakeType };  //object
export type DiscordChannelFollowerWebhookResponse = { application_id?: (null | DiscordSnowflakeType), avatar?: string | null, channel_id?: (null | DiscordSnowflakeType), guild_id?: (null | DiscordSnowflakeType), id: DiscordSnowflakeType, name: string, type: (DiscordWebhookTypes), user?: DiscordUserResponse, source_guild?: DiscordWebhookSourceGuildResponse, source_channel?: DiscordWebhookSourceChannelResponse };  //object
export type DiscordChannelPermissionOverwriteRequest = { id: DiscordSnowflakeType, type?: (null | DiscordChannelPermissionOverwrites), allow?: number | null, deny?: number | null };  //object
export type DiscordChannelPermissionOverwriteResponse = { id: DiscordSnowflakeType, type: DiscordChannelPermissionOverwrites, allow: string, deny: string };  //object
export type DiscordChannelPermissionOverwrites = (0 | 1);  //integer
export type DiscordChannelSelectComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordChannelSelectDefaultValue[] | null, channel_types?: DiscordChannelTypes[] | null };  //object
export type DiscordChannelSelectComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordChannelSelectDefaultValue[] | null, channel_types?: DiscordChannelTypes[] | null };  //object
export type DiscordChannelSelectComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, placeholder?: string, min_values?: number | null, max_values?: number | null, disabled?: boolean, channel_types?: DiscordChannelTypes[], default_values?: DiscordChannelSelectDefaultValueResponse[] };  //object
export type DiscordChannelSelectDefaultValue = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordChannelSelectDefaultValueResponse = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordChannelTypes = (1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15);  //integer
export type DiscordCommandPermissionResponse = { id: DiscordSnowflakeType, type: DiscordApplicationCommandPermissionType, permission: boolean };  //object
export type DiscordCommandPermissionsResponse = { id: DiscordSnowflakeType, application_id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, permissions: DiscordCommandPermissionResponse[] };  //object
export type DiscordComponentEmojiForRequest = { id?: (null | DiscordSnowflakeType), name: string };  //object
export type DiscordComponentEmojiResponse = { id?: DiscordSnowflakeType, name: string, animated?: boolean };  //object
export type DiscordConfettiPotionCreateRequest = object;  //object
export type DiscordConnectedAccountGuildResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null };  //object
export type DiscordConnectedAccountIntegrationResponse = { id: string, type: DiscordIntegrationTypes, account: DiscordAccountResponse, guild: DiscordConnectedAccountGuildResponse };  //object
export type DiscordConnectedAccountProviders = ("battlenet" | "bluesky" | "bungie" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "mastodon" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "roblox" | "skype" | "spotify" | "steam" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube" | "domain");  //string
export type DiscordConnectedAccountResponse = { id: string, name?: string | null, type: DiscordConnectedAccountProviders, friend_sync: boolean, integrations?: DiscordConnectedAccountIntegrationResponse[], show_activity: boolean, two_way_link: boolean, verified: boolean, visibility: DiscordConnectedAccountVisibility, revoked?: boolean };  //object
export type DiscordConnectedAccountVisibility = (0 | 1);  //integer
export type DiscordContainerComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, accent_color?: number | null, components: (DiscordActionRowComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[], spoiler?: boolean | null };  //object
export type DiscordContainerComponentResponse = { type: (DiscordMessageComponentTypes), id: number, accent_color?: number | null, components: (DiscordActionRowComponentResponse | DiscordFileComponentResponse | DiscordMediaGalleryComponentResponse | DiscordSectionComponentResponse | DiscordSeparatorComponentResponse | DiscordTextDisplayComponentResponse)[], spoiler: boolean };  //object
export type DiscordCreateEntitlementRequestData = { sku_id: DiscordSnowflakeType, owner_id: DiscordSnowflakeType, owner_type: DiscordEntitlementOwnerTypes };  //object
export type DiscordCreateForumThreadRequest = { name: string, auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), rate_limit_per_user?: number | null, applied_tags?: DiscordSnowflakeType[] | null, message: DiscordBaseCreateMessageCreateRequest };  //object
export type DiscordCreateGroupDMInviteRequest = { max_age?: number | null };  //object
export type DiscordCreateGuildChannelRequest = { type?: (null | (DiscordChannelTypes)), name: string, position?: number | null, topic?: string | null, bitrate?: number | null, user_limit?: number | null, nsfw?: boolean | null, rate_limit_per_user?: number | null, parent_id?: (null | DiscordSnowflakeType), permission_overwrites?: DiscordChannelPermissionOverwriteRequest[] | null, rtc_region?: string | null, video_quality_mode?: (null | DiscordVideoQualityModes), default_auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), default_reaction_emoji?: (null | DiscordUpdateDefaultReactionEmojiRequest), default_thread_rate_limit_per_user?: number | null, default_sort_order?: (null | DiscordThreadSortOrder), default_forum_layout?: (null | DiscordForumLayout), default_tag_setting?: (null | DiscordThreadSearchTagSetting), available_tags?: (null | DiscordCreateOrUpdateThreadTagRequest)[] | null };  //object
export type DiscordCreateGuildInviteRequest = { max_age?: number | null, temporary?: boolean | null, max_uses?: number | null, unique?: boolean | null, target_user_id?: (null | DiscordSnowflakeType), target_application_id?: (null | DiscordSnowflakeType), target_type?: (null | (DiscordInviteTargetTypes)) };  //object
export type DiscordCreateMessageInteractionCallbackRequest = { type: (DiscordInteractionCallbackTypes), data?: (null | DiscordIncomingWebhookInteractionRequest) };  //object
export type DiscordCreateMessageInteractionCallbackResponse = { type: (DiscordInteractionCallbackTypes), message: DiscordMessageResponse };  //object
export type DiscordCreateOrUpdateThreadTagRequest = { name: string, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, moderated?: boolean | null };  //object
export type DiscordCreatePrivateChannelRequest = { recipient_id?: (null | DiscordSnowflakeType), access_tokens?: string[] | null, nicks?: object | null };  //object
export type DiscordCreateRoleRequest = { name?: string | null, permissions?: number | null, color?: number | null, hoist?: boolean | null, mentionable?: boolean | null, icon?: string | null, unicode_emoji?: string | null };  //object
export type DiscordCreateTextThreadWithMessageRequest = { name: string, auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), rate_limit_per_user?: number | null };  //object
export type DiscordCreateTextThreadWithoutMessageRequest = { name: string, auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), rate_limit_per_user?: number | null, type?: (null | (DiscordChannelTypes)), invitable?: boolean | null };  //object
export type DiscordCreatedThreadResponse = { id: DiscordSnowflakeType, type: (DiscordChannelTypes), last_message_id?: (null | DiscordSnowflakeType), flags: number, last_pin_timestamp?: string | null, guild_id: DiscordSnowflakeType, name: string, parent_id?: (null | DiscordSnowflakeType), rate_limit_per_user?: number, bitrate?: number, user_limit?: number, rtc_region?: string | null, video_quality_mode?: DiscordVideoQualityModes, permissions?: string | null, owner_id: DiscordSnowflakeType, thread_metadata: DiscordThreadMetadataResponse, message_count: number, member_count: number, total_message_sent: number, applied_tags?: DiscordSnowflakeType[], member?: DiscordThreadMemberResponse };  //object
export type DiscordCustomClientThemeResponse = { colors: string[], gradient_angle: number, base_mix: number, base_theme: DiscordMessageShareCustomUserThemeBaseTheme };  //object
export type DiscordCustomClientThemeShareRequest = { colors: string[], gradient_angle: number, base_mix: number, base_theme?: (null | DiscordMessageShareCustomUserThemeBaseTheme) };  //object
export type DiscordDefaultKeywordListTriggerMetadata = { allow_list?: string[] | null, presets?: DiscordAutomodKeywordPresetType[] | null };  //object
export type DiscordDefaultKeywordListTriggerMetadataResponse = { allow_list: string[], presets: DiscordAutomodKeywordPresetType[] };  //object
export type DiscordDefaultKeywordListUpsertRequest = { name: string, event_type: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type: (DiscordAutomodTriggerType), trigger_metadata: DiscordDefaultKeywordListTriggerMetadata };  //object
export type DiscordDefaultKeywordListUpsertRequestPartial = { name?: string, event_type?: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type?: (DiscordAutomodTriggerType), trigger_metadata?: DiscordDefaultKeywordListTriggerMetadata };  //object
export type DiscordDefaultKeywordRuleResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, creator_id: DiscordSnowflakeType, name: string, event_type: DiscordAutomodEventType, actions: (DiscordBlockMessageActionResponse | DiscordFlagToChannelActionResponse | DiscordQuarantineUserActionResponse | DiscordUserCommunicationDisabledActionResponse)[], trigger_type: (DiscordAutomodTriggerType), enabled: boolean, exempt_roles: DiscordSnowflakeType[], exempt_channels: DiscordSnowflakeType[], trigger_metadata: DiscordDefaultKeywordListTriggerMetadataResponse };  //object
export type DiscordDefaultReactionEmojiResponse = { emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordDiscordIntegrationResponse = { type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse, enabled: boolean, id: DiscordSnowflakeType, application: DiscordIntegrationApplicationResponse, scopes: (DiscordOAuth2Scopes)[], user?: DiscordUserResponse };  //object
export type DiscordEmbeddedActivityInstance = { application_id: DiscordSnowflakeType, instance_id: string, launch_id: string, location: (DiscordGuildChannelLocation | DiscordPrivateChannelLocation), users: DiscordSnowflakeType[] };  //object
export type DiscordEmbeddedActivityLocationKind = ("gc" | "pc" | "party");  //string
export type DiscordEmojiResponse = { id: DiscordSnowflakeType, name: string, user?: DiscordUserResponse, roles: DiscordSnowflakeType[], require_colons: boolean, managed: boolean, animated: boolean, available: boolean };  //object
export type DiscordEntitlementOwnerTypes = number;  //integer
export type DiscordEntitlementResponse = { id: DiscordSnowflakeType, sku_id: DiscordSnowflakeType, application_id: DiscordSnowflakeType, user_id: DiscordSnowflakeType, guild_id?: (null | DiscordSnowflakeType), deleted: boolean, starts_at?: string | null, ends_at?: string | null, type: DiscordEntitlementTypes, fulfilled_at?: string | null, fulfillment_status?: (null | DiscordEntitlementTenantFulfillmentStatusResponse), consumed?: boolean | null, gifter_user_id?: (null | DiscordSnowflakeType), parent_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordEntitlementTenantFulfillmentStatusResponse = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7);  //integer
export type DiscordEntitlementTypes = (8 | 10);  //integer
export type DiscordEntityMetadataExternal = { location: string };  //object
export type DiscordEntityMetadataExternalResponse = { location: string };  //object
export type DiscordEntityMetadataStageInstance = object;  //object
export type DiscordEntityMetadataStageInstanceResponse = object;  //object
export type DiscordEntityMetadataVoice = object;  //object
export type DiscordEntityMetadataVoiceResponse = object;  //object
export type DiscordExternalConnectionIntegrationResponse = { type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse, enabled: boolean, id: string, user: DiscordUserResponse, revoked?: boolean, expire_behavior?: DiscordIntegrationExpireBehaviorTypes, expire_grace_period?: DiscordIntegrationExpireGracePeriodTypes, subscriber_count?: number, synced_at?: string, role_id?: (null | DiscordSnowflakeType), syncing?: boolean, enable_emoticons?: boolean };  //object
export type DiscordExternalScheduledEventCreateRequest = { name: string, description?: string | null, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, privacy_level: DiscordGuildScheduledEventPrivacyLevels, entity_type: (DiscordGuildScheduledEventEntityTypes), channel_id?: (null | DiscordSnowflakeType), entity_metadata: DiscordEntityMetadataExternal };  //object
export type DiscordExternalScheduledEventPatchRequestPartial = { status?: (null | DiscordGuildScheduledEventStatuses), name?: string, description?: string | null, image?: string | null, scheduled_start_time?: string, scheduled_end_time?: string | null, entity_type?: (null | (DiscordGuildScheduledEventEntityTypes)), privacy_level?: DiscordGuildScheduledEventPrivacyLevels, channel_id?: (null | DiscordSnowflakeType), entity_metadata?: DiscordEntityMetadataExternal };  //object
export type DiscordExternalScheduledEventResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, name: string, description?: string | null, channel_id?: (null | DiscordSnowflakeType), creator_id?: (null | DiscordSnowflakeType), creator?: DiscordUserResponse, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, status: DiscordGuildScheduledEventStatuses, entity_type: (DiscordGuildScheduledEventEntityTypes), entity_id?: (null | DiscordSnowflakeType), user_count?: number, privacy_level: DiscordGuildScheduledEventPrivacyLevels, user_rsvp?: (null | DiscordScheduledEventUserResponse), entity_metadata: DiscordEntityMetadataExternalResponse };  //object
export type DiscordFileComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, spoiler?: boolean | null, file: DiscordUnfurledMediaRequestWithAttachmentReferenceRequired };  //object
export type DiscordFileComponentResponse = { type: (DiscordMessageComponentTypes), id: number, file: DiscordUnfurledMediaResponse, name?: string | null, size?: number | null, spoiler: boolean };  //object
export type DiscordFileUploadComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, min_values?: number | null, max_values?: number | null, required?: boolean | null };  //object
export type DiscordFlagToChannelAction = { type: (DiscordAutomodActionType), metadata: DiscordFlagToChannelActionMetadata };  //object
export type DiscordFlagToChannelActionMetadata = { channel_id: DiscordSnowflakeType };  //object
export type DiscordFlagToChannelActionMetadataResponse = { channel_id: DiscordSnowflakeType };  //object
export type DiscordFlagToChannelActionResponse = { type: (DiscordAutomodActionType), metadata: DiscordFlagToChannelActionMetadataResponse };  //object
export type DiscordForumLayout = (0 | 1 | 2);  //integer
export type DiscordForumTagResponse = { id: DiscordSnowflakeType, name: string, moderated: boolean, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordFriendInviteResponse = { type: (DiscordInviteTypes), code: string, inviter?: DiscordUserResponse, max_age?: number, created_at?: string, expires_at?: string | null, friends_count?: number, channel?: (null | DiscordInviteChannelResponse), is_contact?: boolean, uses?: number, max_uses?: number, flags?: number };  //object
export type DiscordGatewayBotResponse = { url: string, session_start_limit: DiscordGatewayBotSessionStartLimitResponse, shards: number };  //object
export type DiscordGatewayBotSessionStartLimitResponse = { max_concurrency: number, remaining: number, reset_after: number, total: number };  //object
export type DiscordGatewayResponse = { url: string };  //object
export type DiscordGithubAuthor = { username?: string | null, name: string };  //object
export type DiscordGithubCheckApp = { name: string };  //object
export type DiscordGithubCheckPullRequest = { number: number };  //object
export type DiscordGithubCheckRun = { conclusion?: string | null, name: string, html_url: string, check_suite: DiscordGithubCheckSuite, details_url?: string | null, output?: (null | DiscordGithubCheckRunOutput), pull_requests?: DiscordGithubCheckPullRequest[] | null };  //object
export type DiscordGithubCheckRunOutput = { title?: string | null, summary?: string | null };  //object
export type DiscordGithubCheckSuite = { conclusion?: string | null, head_branch?: string | null, head_sha: string, pull_requests?: DiscordGithubCheckPullRequest[] | null, app: DiscordGithubCheckApp };  //object
export type DiscordGithubComment = { id: number, html_url: string, user: DiscordGithubUser, commit_id?: string | null, body: string };  //object
export type DiscordGithubCommit = { id: string, url: string, message: string, author: DiscordGithubAuthor };  //object
export type DiscordGithubDiscussion = { title: string, number: number, html_url: string, answer_html_url?: string | null, body?: string | null, user: DiscordGithubUser };  //object
export type DiscordGithubIssue = { id: number, number: number, html_url: string, user: DiscordGithubUser, title: string, body?: string | null, pull_request?: unknown };  //object
export type DiscordGithubRelease = { id: number, tag_name: string, html_url: string, author: DiscordGithubUser };  //object
export type DiscordGithubRepository = { id: number, html_url: string, name: string, full_name: string };  //object
export type DiscordGithubReview = { user: DiscordGithubUser, body?: string | null, html_url: string, state: string };  //object
export type DiscordGithubUser = { id: number, login: string, html_url: string, avatar_url: string };  //object
export type DiscordGithubWebhook = { action?: string | null, ref?: string | null, ref_type?: string | null, comment?: (null | DiscordGithubComment), issue?: (null | DiscordGithubIssue), pull_request?: (null | DiscordGithubIssue), repository?: (null | DiscordGithubRepository), forkee?: (null | DiscordGithubRepository), sender: DiscordGithubUser, member?: (null | DiscordGithubUser), release?: (null | DiscordGithubRelease), head_commit?: (null | DiscordGithubCommit), commits?: DiscordGithubCommit[] | null, forced?: boolean | null, compare?: string | null, review?: (null | DiscordGithubReview), check_run?: (null | DiscordGithubCheckRun), check_suite?: (null | DiscordGithubCheckSuite), discussion?: (null | DiscordGithubDiscussion), answer?: (null | DiscordGithubComment) };  //object
export type DiscordGroupDMInviteResponse = { type: (DiscordInviteTypes), code: string, inviter?: DiscordUserResponse, max_age?: number, created_at?: string, expires_at?: string | null, channel: DiscordInviteChannelResponse, approximate_member_count?: number | null };  //object
export type DiscordGuildAuditLogResponse = { audit_log_entries: DiscordAuditLogEntryResponse[], users: DiscordUserResponse[], integrations: (DiscordPartialDiscordIntegrationResponse | DiscordPartialExternalConnectionIntegrationResponse | DiscordPartialGuildSubscriptionIntegrationResponse)[], webhooks: (DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)[], guild_scheduled_events: (DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)[], threads: DiscordThreadResponse[], application_commands: DiscordApplicationCommandResponse[], auto_moderation_rules: (DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse | null)[] };  //object
export type DiscordGuildBanResponse = { user: DiscordUserResponse, reason?: string | null };  //object
export type DiscordGuildChannelLocation = { id: string, kind: (DiscordEmbeddedActivityLocationKind), channel_id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType };  //object
export type DiscordGuildChannelResponse = { id: DiscordSnowflakeType, type: (DiscordChannelTypes), last_message_id?: (null | DiscordSnowflakeType), flags: number, last_pin_timestamp?: string | null, guild_id: DiscordSnowflakeType, name: string, parent_id?: (null | DiscordSnowflakeType), rate_limit_per_user?: number, bitrate?: number, user_limit?: number, rtc_region?: string | null, video_quality_mode?: DiscordVideoQualityModes, permissions?: string | null, topic?: string | null, default_auto_archive_duration?: DiscordThreadAutoArchiveDuration, default_thread_rate_limit_per_user?: number, position: number, permission_overwrites?: DiscordChannelPermissionOverwriteResponse[], nsfw?: boolean, available_tags?: DiscordForumTagResponse[], default_reaction_emoji?: (null | DiscordDefaultReactionEmojiResponse), default_sort_order?: (null | DiscordThreadSortOrder), default_forum_layout?: (null | DiscordForumLayout), default_tag_setting?: (null | DiscordThreadSearchTagSetting), hd_streaming_until?: string, hd_streaming_buyer_id?: DiscordSnowflakeType };  //object
export type DiscordGuildExplicitContentFilterTypes = (0 | 1 | 2);  //integer
export type DiscordGuildFeatures = ("ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED");  //string
export type DiscordGuildHomeSettingsResponse = { guild_id: DiscordSnowflakeType, enabled: boolean, welcome_message?: DiscordWelcomeMessageResponse, new_member_actions: (null | DiscordNewMemberActionResponse)[], resource_channels: (null | DiscordResourceChannelResponse)[] };  //object
export type DiscordGuildIncomingWebhookResponse = { application_id?: (null | DiscordSnowflakeType), avatar?: string | null, channel_id?: (null | DiscordSnowflakeType), guild_id?: (null | DiscordSnowflakeType), id: DiscordSnowflakeType, name: string, type: (DiscordWebhookTypes), user?: DiscordUserResponse, token?: string, url?: string };  //object
export type DiscordGuildInviteResponse = { type: (DiscordInviteTypes), code: string, inviter?: DiscordUserResponse, max_age?: number, created_at?: string, expires_at?: string | null, is_contact?: boolean, flags?: number, guild: DiscordInviteGuildResponse, guild_id: DiscordSnowflakeType, channel: DiscordInviteChannelResponse, target_type?: DiscordInviteTargetTypes, target_user?: DiscordUserResponse, target_application?: DiscordInviteApplicationResponse, guild_scheduled_event?: DiscordScheduledEventResponse, uses?: number, max_uses?: number, temporary?: boolean, approximate_member_count?: number | null, approximate_presence_count?: number | null, is_nickname_changeable?: boolean };  //object
export type DiscordGuildMFALevel = (0 | 1);  //integer
export type DiscordGuildMemberResponse = { avatar?: string | null, avatar_decoration_data?: (null | DiscordUserAvatarDecorationResponse), banner?: string | null, communication_disabled_until?: string | null, flags: number, joined_at: string, nick?: string | null, pending: boolean, premium_since?: string | null, roles: DiscordSnowflakeType[], collectibles?: (null | DiscordUserCollectiblesResponse), user: DiscordUserResponse, mute: boolean, deaf: boolean };  //object
export type DiscordGuildNSFWContentLevel = (0 | 1 | 2 | 3);  //integer
export type DiscordGuildOnboardingMode = (0 | 1);  //integer
export type DiscordGuildOnboardingResponse = { guild_id: DiscordSnowflakeType, prompts: DiscordOnboardingPromptResponse[], default_channel_ids: DiscordSnowflakeType[], enabled: boolean };  //object
export type DiscordGuildPatchRequestPartial = { name?: string, description?: string | null, region?: string | null, icon?: string | null, verification_level?: (null | DiscordVerificationLevels), default_message_notifications?: (null | DiscordUserNotificationSettings), explicit_content_filter?: (null | DiscordGuildExplicitContentFilterTypes), preferred_locale?: (null | DiscordAvailableLocalesEnum), afk_timeout?: (null | DiscordAfkTimeouts), afk_channel_id?: (null | DiscordSnowflakeType), system_channel_id?: (null | DiscordSnowflakeType), splash?: string | null, banner?: string | null, system_channel_flags?: number | null, features?: string | null[] | null, discovery_splash?: string | null, home_header?: string | null, rules_channel_id?: (null | DiscordSnowflakeType), safety_alerts_channel_id?: (null | DiscordSnowflakeType), public_updates_channel_id?: (null | DiscordSnowflakeType), premium_progress_bar_enabled?: boolean | null };  //object
export type DiscordGuildPreviewResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description?: string | null, home_header?: string | null, splash?: string | null, discovery_splash?: string | null, features: DiscordGuildFeatures[], approximate_member_count: number, approximate_presence_count: number, emojis: DiscordEmojiResponse[], stickers: DiscordGuildStickerResponse[] };  //object
export type DiscordGuildProductPurchaseResponse = { listing_id: DiscordSnowflakeType, product_name: string };  //object
export type DiscordGuildPruneResponse = { pruned?: number | null };  //object
export type DiscordGuildResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description?: string | null, home_header?: string | null, splash?: string | null, discovery_splash?: string | null, features: DiscordGuildFeatures[], banner?: string | null, owner_id: DiscordSnowflakeType, application_id?: (null | DiscordSnowflakeType), region: string, afk_channel_id?: (null | DiscordSnowflakeType), afk_timeout: DiscordAfkTimeouts, system_channel_id?: (null | DiscordSnowflakeType), system_channel_flags: number, widget_enabled: boolean, widget_channel_id?: (null | DiscordSnowflakeType), verification_level: DiscordVerificationLevels, roles: DiscordGuildRoleResponse[], default_message_notifications: DiscordUserNotificationSettings, mfa_level: DiscordGuildMFALevel, explicit_content_filter: DiscordGuildExplicitContentFilterTypes, max_presences?: number | null, max_members: number, max_stage_video_channel_users: number, max_video_channel_users: number, vanity_url_code?: string | null, premium_tier: DiscordPremiumGuildTiers, premium_subscription_count: number, preferred_locale: DiscordAvailableLocalesEnum, rules_channel_id?: (null | DiscordSnowflakeType), safety_alerts_channel_id?: (null | DiscordSnowflakeType), public_updates_channel_id?: (null | DiscordSnowflakeType), premium_progress_bar_enabled: boolean, nsfw: boolean, nsfw_level: DiscordGuildNSFWContentLevel, emojis: DiscordEmojiResponse[], stickers: DiscordGuildStickerResponse[] };  //object
export type DiscordGuildRoleColorsResponse = { primary_color: number, secondary_color?: number | null, tertiary_color?: number | null };  //object
export type DiscordGuildRoleResponse = { id: DiscordSnowflakeType, name: string, description?: string | null, permissions: string, position: number, color: number, colors: DiscordGuildRoleColorsResponse, hoist: boolean, managed: boolean, mentionable: boolean, icon?: string | null, unicode_emoji?: string | null, tags?: DiscordGuildRoleTagsResponse, flags: number };  //object
export type DiscordGuildRoleTagsResponse = { premium_subscriber?: null, bot_id?: DiscordSnowflakeType, integration_id?: DiscordSnowflakeType, subscription_listing_id?: DiscordSnowflakeType, available_for_purchase?: null, guild_connections?: null };  //object
export type DiscordGuildScheduledEventEntityTypes = (0 | 1 | 2 | 3);  //integer
export type DiscordGuildScheduledEventPrivacyLevels = (2);  //integer
export type DiscordGuildScheduledEventStatuses = (1 | 2 | 3 | 4);  //integer
export type DiscordGuildStickerResponse = { id: DiscordSnowflakeType, name: string, tags: string, type: (DiscordStickerTypes), format_type?: (null | DiscordStickerFormatTypes), description?: string | null, available: boolean, guild_id: DiscordSnowflakeType, user?: DiscordUserResponse };  //object
export type DiscordGuildSubscriptionIntegrationResponse = { type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse, enabled: boolean, id: DiscordSnowflakeType };  //object
export type DiscordGuildTemplateChannelResponse = { id?: number | null, type: (DiscordChannelTypes), name?: string | null, position?: number | null, topic?: string | null, bitrate: number, user_limit: number, nsfw: boolean, rate_limit_per_user: number, parent_id?: (null | DiscordSnowflakeType), default_auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), permission_overwrites: (null | DiscordChannelPermissionOverwriteResponse)[], available_tags?: DiscordGuildTemplateChannelTags[] | null, template: string, default_reaction_emoji?: (null | DiscordDefaultReactionEmojiResponse), default_thread_rate_limit_per_user?: number | null, default_sort_order?: (null | DiscordThreadSortOrder), default_forum_layout?: (null | DiscordForumLayout), default_tag_setting?: (null | DiscordThreadSearchTagSetting), icon_emoji?: (null | DiscordIconEmojiResponse), theme_color?: number | null };  //object
export type DiscordGuildTemplateChannelTags = { id?: number | null, name: string, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, moderated?: boolean | null };  //object
export type DiscordGuildTemplateResponse = { code: string, name: string, description?: string | null, usage_count: number, creator_id: DiscordSnowflakeType, creator?: (null | DiscordUserResponse), created_at: string, updated_at: string, source_guild_id: DiscordSnowflakeType, serialized_source_guild: DiscordGuildTemplateSnapshotResponse, is_dirty?: boolean | null };  //object
export type DiscordGuildTemplateRoleColorsResponse = { primary_color: number, secondary_color?: number | null, tertiary_color?: number | null };  //object
export type DiscordGuildTemplateRoleResponse = { id: number, name: string, permissions: string, color: number, colors?: (null | DiscordGuildTemplateRoleColorsResponse), hoist: boolean, mentionable: boolean, icon?: string | null, unicode_emoji?: string | null };  //object
export type DiscordGuildTemplateSnapshotResponse = { name: string, description?: string | null, region?: string | null, verification_level: DiscordVerificationLevels, default_message_notifications: DiscordUserNotificationSettings, explicit_content_filter: DiscordGuildExplicitContentFilterTypes, preferred_locale: DiscordAvailableLocalesEnum, afk_channel_id?: (null | DiscordSnowflakeType), afk_timeout: DiscordAfkTimeouts, system_channel_id?: (null | DiscordSnowflakeType), system_channel_flags: number, roles: DiscordGuildTemplateRoleResponse[], channels: DiscordGuildTemplateChannelResponse[] };  //object
export type DiscordGuildWelcomeChannel = { channel_id: DiscordSnowflakeType, description: string, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordGuildWelcomeScreenChannelResponse = { channel_id: DiscordSnowflakeType, description: string, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordGuildWelcomeScreenResponse = { description?: string | null, welcome_channels: DiscordGuildWelcomeScreenChannelResponse[] };  //object
export type DiscordGuildWithCountsResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description?: string | null, home_header?: string | null, splash?: string | null, discovery_splash?: string | null, features: DiscordGuildFeatures[], banner?: string | null, owner_id: DiscordSnowflakeType, application_id?: (null | DiscordSnowflakeType), region: string, afk_channel_id?: (null | DiscordSnowflakeType), afk_timeout: DiscordAfkTimeouts, system_channel_id?: (null | DiscordSnowflakeType), system_channel_flags: number, widget_enabled: boolean, widget_channel_id?: (null | DiscordSnowflakeType), verification_level: DiscordVerificationLevels, roles: DiscordGuildRoleResponse[], default_message_notifications: DiscordUserNotificationSettings, mfa_level: DiscordGuildMFALevel, explicit_content_filter: DiscordGuildExplicitContentFilterTypes, max_presences?: number | null, max_members: number, max_stage_video_channel_users: number, max_video_channel_users: number, vanity_url_code?: string | null, premium_tier: DiscordPremiumGuildTiers, premium_subscription_count: number, preferred_locale: DiscordAvailableLocalesEnum, rules_channel_id?: (null | DiscordSnowflakeType), safety_alerts_channel_id?: (null | DiscordSnowflakeType), public_updates_channel_id?: (null | DiscordSnowflakeType), premium_progress_bar_enabled: boolean, nsfw: boolean, nsfw_level: DiscordGuildNSFWContentLevel, emojis: DiscordEmojiResponse[], stickers: DiscordGuildStickerResponse[], approximate_member_count?: number | null, approximate_presence_count?: number | null };  //object
export type DiscordIconEmojiResponse = object;  //object
export type DiscordIncomingWebhookInteractionRequest = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), tts?: boolean | null, flags?: number | null };  //object
export type DiscordIncomingWebhookRequestPartial = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), tts?: boolean | null, flags?: number | null, username?: string | null, avatar_url?: string | null, thread_name?: string | null, applied_tags?: DiscordSnowflakeType[] | null };  //object
export type DiscordIncomingWebhookUpdateForInteractionCallbackRequestPartial = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, attachments?: DiscordMessageAttachmentRequest[] | null, flags?: number | null };  //object
export type DiscordIncomingWebhookUpdateRequestPartial = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), flags?: number | null };  //object
export type DiscordInt53Type = number;  //integer
export type DiscordIntegrationApplicationResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description: string, type?: (null | DiscordApplicationTypes), cover_image?: string, primary_sku_id?: DiscordSnowflakeType, bot?: DiscordUserResponse };  //object
export type DiscordIntegrationExpireBehaviorTypes = (0 | 1);  //integer
export type DiscordIntegrationExpireGracePeriodTypes = (1 | 3 | 7 | 14 | 30);  //integer
export type DiscordIntegrationTypes = ("discord" | "twitch" | "youtube" | "guild_subscription");  //string
export type DiscordInteractionApplicationCommandAutocompleteCallbackIntegerData = { choices?: (null | DiscordApplicationCommandOptionIntegerChoice)[] | null };  //object
export type DiscordInteractionApplicationCommandAutocompleteCallbackNumberData = { choices?: (null | DiscordApplicationCommandOptionNumberChoice)[] | null };  //object
export type DiscordInteractionApplicationCommandAutocompleteCallbackStringData = { choices?: (null | DiscordApplicationCommandOptionStringChoice)[] | null };  //object
export type DiscordInteractionCallbackResponse = { interaction: DiscordInteractionResponse, resource?: (DiscordCreateMessageInteractionCallbackResponse | DiscordLaunchActivityInteractionCallbackResponse | DiscordUpdateMessageInteractionCallbackResponse) };  //object
export type DiscordInteractionCallbackTypes = (1 | 4 | 5 | 6 | 7 | 8 | 9 | 12);  //integer
export type DiscordInteractionContextType = (0 | 1 | 2);  //integer
export type DiscordInteractionResponse = { id: DiscordSnowflakeType, type: DiscordInteractionTypes, response_message_id?: DiscordSnowflakeType, response_message_loading?: boolean, response_message_ephemeral?: boolean, channel_id?: DiscordSnowflakeType, guild_id?: DiscordSnowflakeType };  //object
export type DiscordInteractionTypes = (1 | 2 | 3 | 4 | 5);  //integer
export type DiscordInviteApplicationResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description: string, type?: (null | DiscordApplicationTypes), cover_image?: string, primary_sku_id?: DiscordSnowflakeType, bot?: DiscordUserResponse, slug?: string, guild_id?: DiscordSnowflakeType, rpc_origins?: string | null[], bot_public?: boolean, bot_require_code_grant?: boolean, terms_of_service_url?: string, privacy_policy_url?: string, custom_install_url?: string, install_params?: DiscordApplicationOAuth2InstallParamsResponse, integration_types_config?: object, verify_key: string, flags: number, max_participants?: number | null, tags?: string[] };  //object
export type DiscordInviteChannelRecipientResponse = { username: string };  //object
export type DiscordInviteChannelResponse = { id: DiscordSnowflakeType, type: DiscordChannelTypes, name?: string | null, icon?: string, recipients?: DiscordInviteChannelRecipientResponse[] };  //object
export type DiscordInviteGuildResponse = { id: DiscordSnowflakeType, name: string, splash?: string | null, banner?: string | null, description?: string | null, icon?: string | null, features: DiscordGuildFeatures[], verification_level?: (null | DiscordVerificationLevels), vanity_url_code?: string | null, nsfw_level?: (null | DiscordGuildNSFWContentLevel), nsfw?: boolean | null, premium_subscription_count: number };  //object
export type DiscordInviteTargetTypes = (1 | 2 | 3);  //integer
export type DiscordInviteTypes = (0 | 1 | 2);  //integer
export type DiscordKeywordRuleResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, creator_id: DiscordSnowflakeType, name: string, event_type: DiscordAutomodEventType, actions: (DiscordBlockMessageActionResponse | DiscordFlagToChannelActionResponse | DiscordQuarantineUserActionResponse | DiscordUserCommunicationDisabledActionResponse)[], trigger_type: (DiscordAutomodTriggerType), enabled: boolean, exempt_roles: DiscordSnowflakeType[], exempt_channels: DiscordSnowflakeType[], trigger_metadata: DiscordKeywordTriggerMetadataResponse };  //object
export type DiscordKeywordTriggerMetadata = { keyword_filter?: string[] | null, regex_patterns?: string[] | null, allow_list?: string[] | null };  //object
export type DiscordKeywordTriggerMetadataResponse = { keyword_filter: string[], regex_patterns: string[], allow_list: string[] };  //object
export type DiscordKeywordUpsertRequest = { name: string, event_type: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordKeywordTriggerMetadata) };  //object
export type DiscordKeywordUpsertRequestPartial = { name?: string, event_type?: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type?: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordKeywordTriggerMetadata) };  //object
export type DiscordLabelComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, label: string, description?: string | null, component: (DiscordChannelSelectComponentForModalRequest | DiscordFileUploadComponentForModalRequest | DiscordMentionableSelectComponentForModalRequest | DiscordRoleSelectComponentForModalRequest | DiscordStringSelectComponentForModalRequest | DiscordTextInputComponentForModalRequest | DiscordUserSelectComponentForModalRequest) };  //object
export type DiscordLaunchActivityInteractionCallbackRequest = { type: (DiscordInteractionCallbackTypes) };  //object
export type DiscordLaunchActivityInteractionCallbackResponse = { type: (DiscordInteractionCallbackTypes) };  //object
export type DiscordListApplicationEmojisResponse = { items: DiscordEmojiResponse[] };  //object
export type DiscordListGuildSoundboardSoundsResponse = { items: DiscordSoundboardSoundResponse[] };  //object
export type DiscordLobbyGuildInviteResponse = { code: string };  //object
export type DiscordLobbyMemberRequest = { id: DiscordSnowflakeType, metadata?: object | null, flags?: (null | number) };  //object
export type DiscordLobbyMemberResponse = { id: DiscordSnowflakeType, metadata?: object | null, flags: number };  //object
export type DiscordLobbyMessageResponse = { id: DiscordSnowflakeType, type: DiscordMessageType, content: string, lobby_id: DiscordSnowflakeType, channel_id: DiscordSnowflakeType, author: DiscordUserResponse, metadata?: object, flags: number, application_id?: DiscordSnowflakeType };  //object
export type DiscordLobbyResponse = { id: DiscordSnowflakeType, application_id: DiscordSnowflakeType, metadata?: object | null, members: DiscordLobbyMemberResponse[], linked_channel?: DiscordGuildChannelResponse, flags: DiscordUInt32Type, override_event_webhooks_url?: string | null };  //object
export type DiscordMLSpamRuleResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, creator_id: DiscordSnowflakeType, name: string, event_type: DiscordAutomodEventType, actions: (DiscordBlockMessageActionResponse | DiscordFlagToChannelActionResponse | DiscordQuarantineUserActionResponse | DiscordUserCommunicationDisabledActionResponse)[], trigger_type: (DiscordAutomodTriggerType), enabled: boolean, exempt_roles: DiscordSnowflakeType[], exempt_channels: DiscordSnowflakeType[], trigger_metadata: DiscordMLSpamTriggerMetadataResponse };  //object
export type DiscordMLSpamTriggerMetadata = object;  //object
export type DiscordMLSpamTriggerMetadataResponse = object;  //object
export type DiscordMLSpamUpsertRequest = { name: string, event_type: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordMLSpamTriggerMetadata) };  //object
export type DiscordMLSpamUpsertRequestPartial = { name?: string, event_type?: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type?: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordMLSpamTriggerMetadata) };  //object
export type DiscordMediaGalleryComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, items: DiscordMediaGalleryItemRequest[] };  //object
export type DiscordMediaGalleryComponentResponse = { type: (DiscordMessageComponentTypes), id: number, items: DiscordMediaGalleryItemResponse[] };  //object
export type DiscordMediaGalleryItemRequest = { description?: string | null, spoiler?: boolean | null, media: DiscordUnfurledMediaRequest };  //object
export type DiscordMediaGalleryItemResponse = { media: DiscordUnfurledMediaResponse, description?: string | null, spoiler: boolean };  //object
export type DiscordMentionSpamRuleResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, creator_id: DiscordSnowflakeType, name: string, event_type: DiscordAutomodEventType, actions: (DiscordBlockMessageActionResponse | DiscordFlagToChannelActionResponse | DiscordQuarantineUserActionResponse | DiscordUserCommunicationDisabledActionResponse)[], trigger_type: (DiscordAutomodTriggerType), enabled: boolean, exempt_roles: DiscordSnowflakeType[], exempt_channels: DiscordSnowflakeType[], trigger_metadata: DiscordMentionSpamTriggerMetadataResponse };  //object
export type DiscordMentionSpamTriggerMetadata = { mention_total_limit?: number | null, mention_raid_protection_enabled?: boolean | null };  //object
export type DiscordMentionSpamTriggerMetadataResponse = { mention_total_limit: number, mention_raid_protection_enabled: boolean };  //object
export type DiscordMentionSpamUpsertRequest = { name: string, event_type: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordMentionSpamTriggerMetadata) };  //object
export type DiscordMentionSpamUpsertRequestPartial = { name?: string, event_type?: DiscordAutomodEventType, actions?: (DiscordBlockMessageAction | DiscordFlagToChannelAction | DiscordQuarantineUserAction | DiscordUserCommunicationDisabledAction)[] | null, enabled?: boolean | null, exempt_roles?: DiscordSnowflakeType[] | null, exempt_channels?: DiscordSnowflakeType[] | null, trigger_type?: (DiscordAutomodTriggerType), trigger_metadata?: (null | DiscordMentionSpamTriggerMetadata) };  //object
export type DiscordMentionableSelectComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: (DiscordRoleSelectDefaultValue | DiscordUserSelectDefaultValue)[] | null };  //object
export type DiscordMentionableSelectComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: (DiscordRoleSelectDefaultValue | DiscordUserSelectDefaultValue)[] | null };  //object
export type DiscordMentionableSelectComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, placeholder?: string, min_values?: number | null, max_values?: number | null, disabled?: boolean, default_values?: (DiscordRoleSelectDefaultValueResponse | DiscordUserSelectDefaultValueResponse)[] };  //object
export type DiscordMessageActivityResponse = object;  //object
export type DiscordMessageAllowedMentionsRequest = { parse?: (null | DiscordAllowedMentionTypes)[] | null, users?: (null | DiscordSnowflakeType)[] | null, roles?: (null | DiscordSnowflakeType)[] | null, replied_user?: boolean | null };  //object
export type DiscordMessageAttachmentRequest = { id: DiscordSnowflakeType, filename?: string | null, description?: string | null, duration_secs?: number | null, waveform?: string | null, title?: string | null, is_remix?: boolean | null };  //object
export type DiscordMessageAttachmentResponse = { id: DiscordSnowflakeType, filename: string, size: number, url: string, proxy_url: string, width?: number, height?: number, duration_secs?: number, waveform?: string, description?: string, content_type?: string, ephemeral?: boolean, title?: string | null, application?: DiscordApplicationResponse, clip_created_at?: string, clip_participants?: DiscordUserResponse[] };  //object
export type DiscordMessageCallResponse = { ended_timestamp?: string | null, participants: DiscordSnowflakeType[] };  //object
export type DiscordMessageComponentInteractionMetadataResponse = { id: DiscordSnowflakeType, type: (DiscordInteractionTypes), user?: DiscordUserResponse, authorizing_integration_owners: object, original_response_message_id?: DiscordSnowflakeType, interacted_message_id: DiscordSnowflakeType };  //object
export type DiscordMessageComponentSeparatorSpacingSize = (1 | 2);  //integer
export type DiscordMessageComponentTypes = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 17 | 18 | 19);  //integer
export type DiscordMessageCreateRequest = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), sticker_ids?: DiscordSnowflakeType[] | null, components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, flags?: number | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), shared_client_theme?: (null | DiscordCustomClientThemeShareRequest), confetti_potion?: (null | DiscordConfettiPotionCreateRequest), message_reference?: (null | DiscordMessageReferenceRequest), nonce?: (number | string | null), enforce_nonce?: boolean | null, tts?: boolean | null };  //object
export type DiscordMessageEditRequestPartial = { content?: string | null, embeds?: DiscordRichEmbed[] | null, flags?: number | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), sticker_ids?: DiscordSnowflakeType[] | null, components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, attachments?: DiscordMessageAttachmentRequest[] | null };  //object
export type DiscordMessageEmbedAuthorResponse = { name: string, url?: string, icon_url?: string, proxy_icon_url?: string };  //object
export type DiscordMessageEmbedFieldResponse = { name: string, value: string, inline: boolean };  //object
export type DiscordMessageEmbedFooterResponse = { text: string, icon_url?: string, proxy_icon_url?: string };  //object
export type DiscordMessageEmbedImageResponse = { url?: string, proxy_url?: string, width?: DiscordUInt32Type, height?: DiscordUInt32Type, content_type?: string, placeholder?: string, placeholder_version?: DiscordUInt32Type, description?: string, flags?: DiscordUInt32Type };  //object
export type DiscordMessageEmbedProviderResponse = { name: string, url?: string };  //object
export type DiscordMessageEmbedResponse = { type: string, url?: string, title?: string, description?: string, color?: number, timestamp?: string, fields?: DiscordMessageEmbedFieldResponse[], author?: DiscordMessageEmbedAuthorResponse, provider?: DiscordMessageEmbedProviderResponse, image?: DiscordMessageEmbedImageResponse, thumbnail?: DiscordMessageEmbedImageResponse, video?: DiscordMessageEmbedVideoResponse, footer?: DiscordMessageEmbedFooterResponse };  //object
export type DiscordMessageEmbedVideoResponse = { url?: string, proxy_url?: string, width?: DiscordUInt32Type, height?: DiscordUInt32Type, content_type?: string, placeholder?: string, placeholder_version?: DiscordUInt32Type, description?: string, flags?: DiscordUInt32Type };  //object
export type DiscordMessageInteractionResponse = { id: DiscordSnowflakeType, type: DiscordInteractionTypes, name: string, user?: DiscordUserResponse, name_localized?: string };  //object
export type DiscordMessageMentionChannelResponse = { id: DiscordSnowflakeType, name: string, type: DiscordChannelTypes, guild_id: DiscordSnowflakeType };  //object
export type DiscordMessageReactionCountDetailsResponse = { burst: number, normal: number };  //object
export type DiscordMessageReactionEmojiResponse = { id?: (null | DiscordSnowflakeType), name?: string | null, animated?: boolean };  //object
export type DiscordMessageReactionResponse = { emoji: DiscordMessageReactionEmojiResponse, count: number, count_details: DiscordMessageReactionCountDetailsResponse, burst_colors: string[], me_burst: boolean, me: boolean };  //object
export type DiscordMessageReferenceRequest = { guild_id?: (null | DiscordSnowflakeType), channel_id?: (null | DiscordSnowflakeType), message_id: DiscordSnowflakeType, fail_if_not_exists?: boolean | null, type?: (null | DiscordMessageReferenceType) };  //object
export type DiscordMessageReferenceResponse = { type: DiscordMessageReferenceType, channel_id: DiscordSnowflakeType, message_id?: DiscordSnowflakeType, guild_id?: DiscordSnowflakeType };  //object
export type DiscordMessageReferenceType = (0);  //integer
export type DiscordMessageResponse = { type: DiscordMessageType, content: string, mentions: DiscordUserResponse[], mention_roles: DiscordSnowflakeType[], attachments: DiscordMessageAttachmentResponse[], embeds: DiscordMessageEmbedResponse[], timestamp: string, edited_timestamp?: string | null, flags: number, components: (DiscordActionRowComponentResponse | DiscordContainerComponentResponse | DiscordFileComponentResponse | DiscordMediaGalleryComponentResponse | DiscordSectionComponentResponse | DiscordSeparatorComponentResponse | DiscordTextDisplayComponentResponse)[], stickers?: (DiscordGuildStickerResponse | DiscordStandardStickerResponse)[], sticker_items?: DiscordMessageStickerItemResponse[], id: DiscordSnowflakeType, channel_id: DiscordSnowflakeType, author: DiscordUserResponse, pinned: boolean, mention_everyone: boolean, tts: boolean, call?: DiscordMessageCallResponse, activity?: DiscordMessageActivityResponse, application?: DiscordBasicApplicationResponse, application_id?: DiscordSnowflakeType, interaction?: DiscordMessageInteractionResponse, nonce?: (number | string | null), webhook_id?: DiscordSnowflakeType, message_reference?: DiscordMessageReferenceResponse, thread?: DiscordThreadResponse, mention_channels?: (null | DiscordMessageMentionChannelResponse)[], role_subscription_data?: DiscordMessageRoleSubscriptionDataResponse, purchase_notification?: DiscordPurchaseNotificationResponse, position?: number, resolved?: DiscordResolvedObjectsResponse, poll?: DiscordPollResponse, shared_client_theme?: (null | DiscordCustomClientThemeResponse), interaction_metadata?: (DiscordApplicationCommandInteractionMetadataResponse | DiscordMessageComponentInteractionMetadataResponse | DiscordModalSubmitInteractionMetadataResponse), message_snapshots?: DiscordMessageSnapshotResponse[], reactions?: DiscordMessageReactionResponse[], referenced_message?: (null | DiscordBasicMessageResponse) };  //object
export type DiscordMessageRoleSubscriptionDataResponse = { role_subscription_listing_id: DiscordSnowflakeType, tier_name: string, total_months_subscribed: number, is_renewal: boolean };  //object
export type DiscordMessageShareCustomUserThemeBaseTheme = (0 | 1 | 2 | 3 | 4);  //integer
export type DiscordMessageSnapshotResponse = { message: DiscordMinimalContentMessageResponse };  //object
export type DiscordMessageStickerItemResponse = { id: DiscordSnowflakeType, name: string, format_type: DiscordStickerFormatTypes };  //object
export type DiscordMessageType = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 46 | 55);  //integer
export type DiscordMetadataItemTypes = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8);  //integer
export type DiscordMinimalContentMessageResponse = { type: DiscordMessageType, content: string, mentions: DiscordUserResponse[], mention_roles: DiscordSnowflakeType[], attachments: DiscordMessageAttachmentResponse[], embeds: DiscordMessageEmbedResponse[], timestamp: string, edited_timestamp?: string | null, flags: number, components: (DiscordActionRowComponentResponse | DiscordContainerComponentResponse | DiscordFileComponentResponse | DiscordMediaGalleryComponentResponse | DiscordSectionComponentResponse | DiscordSeparatorComponentResponse | DiscordTextDisplayComponentResponse)[], stickers?: (DiscordGuildStickerResponse | DiscordStandardStickerResponse)[], sticker_items?: DiscordMessageStickerItemResponse[] };  //object
export type DiscordModalInteractionCallbackRequest = { type: (DiscordInteractionCallbackTypes), data: DiscordModalInteractionCallbackRequestData };  //object
export type DiscordModalInteractionCallbackRequestData = { custom_id: string, title: string, components: (DiscordActionRowComponentForModalRequest | DiscordLabelComponentForModalRequest | DiscordTextDisplayComponentForModalRequest)[] };  //object
export type DiscordModalSubmitInteractionMetadataResponse = { id: DiscordSnowflakeType, type: (DiscordInteractionTypes), user?: DiscordUserResponse, authorizing_integration_owners: object, original_response_message_id?: DiscordSnowflakeType, triggering_interaction_metadata: (DiscordApplicationCommandInteractionMetadataResponse | DiscordMessageComponentInteractionMetadataResponse) };  //object
export type DiscordMyGuildResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, banner?: string | null, owner: boolean, permissions: string, features: DiscordGuildFeatures[], approximate_member_count?: number | null, approximate_presence_count?: number | null };  //object
export type DiscordNameplatePalette = string;  //string
export type DiscordNewMemberActionResponse = { channel_id: DiscordSnowflakeType, action_type: DiscordNewMemberActionType, title: string, description: string, emoji?: DiscordSettingsEmojiResponse, icon?: string };  //object
export type DiscordNewMemberActionType = (0 | 1);  //integer
export type DiscordOAuth2GetAuthorizationResponse = { application: DiscordApplicationResponse, expires: string, scopes: DiscordOAuth2Scopes[], user?: DiscordUserResponse };  //object
export type DiscordOAuth2GetKeys = { keys: DiscordOAuth2Key[] };  //object
export type DiscordOAuth2GetOpenIDConnectUserInfoResponse = { sub: string, email?: string | null, email_verified?: boolean, preferred_username?: string, nickname?: string | null, picture?: string, locale?: string };  //object
export type DiscordOAuth2Key = { kty: string, use: string, kid: string, n: string, e: string, alg: string };  //object
export type DiscordOAuth2Scopes = ("identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | "openid");  //string
export type DiscordOnboardingPromptOptionRequest = { id?: (null | DiscordSnowflakeType), title: string, description?: string | null, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, emoji_animated?: boolean | null, role_ids?: DiscordSnowflakeType[] | null, channel_ids?: DiscordSnowflakeType[] | null };  //object
export type DiscordOnboardingPromptOptionResponse = { id: DiscordSnowflakeType, title: string, description: string, emoji: DiscordSettingsEmojiResponse, role_ids: DiscordSnowflakeType[], channel_ids: DiscordSnowflakeType[] };  //object
export type DiscordOnboardingPromptResponse = { id: DiscordSnowflakeType, title: string, options: DiscordOnboardingPromptOptionResponse[], single_select: boolean, required: boolean, in_onboarding: boolean, type: DiscordOnboardingPromptType };  //object
export type DiscordOnboardingPromptType = (0 | 1);  //integer
export type DiscordPartialDiscordIntegrationResponse = { id: DiscordSnowflakeType, type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse, application_id: DiscordSnowflakeType };  //object
export type DiscordPartialExternalConnectionIntegrationResponse = { id: DiscordSnowflakeType, type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse };  //object
export type DiscordPartialGuildSubscriptionIntegrationResponse = { id: DiscordSnowflakeType, type: (DiscordIntegrationTypes), name?: string | null, account: DiscordAccountResponse };  //object
export type DiscordPinnedMessageResponse = { pinned_at: string, message: DiscordMessageResponse };  //object
export type DiscordPinnedMessagesResponse = { items: DiscordPinnedMessageResponse[], has_more: boolean };  //object
export type DiscordPollAnswerCreateRequest = { poll_media: DiscordPollMediaCreateRequest };  //object
export type DiscordPollAnswerDetailsResponse = { users: DiscordUserResponse[] };  //object
export type DiscordPollAnswerResponse = { answer_id: number, poll_media: DiscordPollMediaResponse };  //object
export type DiscordPollCreateRequest = { question: DiscordPollMedia, answers: DiscordPollAnswerCreateRequest[], allow_multiselect?: boolean | null, layout_type?: (null | DiscordPollLayoutTypes), duration?: number | null };  //object
export type DiscordPollEmoji = { id?: (null | DiscordSnowflakeType), name?: string | null, animated?: boolean | null };  //object
export type DiscordPollEmojiCreateRequest = { id?: (null | DiscordSnowflakeType), name?: string | null, animated?: boolean | null };  //object
export type DiscordPollLayoutTypes = number;  //integer
export type DiscordPollMedia = { text?: string | null, emoji?: (null | DiscordPollEmoji) };  //object
export type DiscordPollMediaCreateRequest = { text?: string | null, emoji?: (null | DiscordPollEmojiCreateRequest) };  //object
export type DiscordPollMediaResponse = { text?: string, emoji?: DiscordMessageReactionEmojiResponse };  //object
export type DiscordPollResponse = { question: DiscordPollMediaResponse, answers: DiscordPollAnswerResponse[], expiry: string, allow_multiselect: boolean, layout_type: DiscordPollLayoutTypes, results: DiscordPollResultsResponse };  //object
export type DiscordPollResultsEntryResponse = { id: number, count: number, me_voted: boolean };  //object
export type DiscordPollResultsResponse = { answer_counts: DiscordPollResultsEntryResponse[], is_finalized: boolean };  //object
export type DiscordPongInteractionCallbackRequest = { type: (DiscordInteractionCallbackTypes) };  //object
export type DiscordPremiumGuildTiers = (0 | 1 | 2 | 3);  //integer
export type DiscordPremiumTypes = (0 | 1 | 2 | 3);  //integer
export type DiscordPrivateApplicationResponse = { id: DiscordSnowflakeType, name: string, icon?: string | null, description: string, type?: (null | DiscordApplicationTypes), cover_image?: string, primary_sku_id?: DiscordSnowflakeType, bot?: DiscordUserResponse, slug?: string, guild_id?: DiscordSnowflakeType, rpc_origins?: string | null[], bot_public?: boolean, bot_require_code_grant?: boolean, terms_of_service_url?: string, privacy_policy_url?: string, custom_install_url?: string, install_params?: DiscordApplicationOAuth2InstallParamsResponse, integration_types_config?: object, verify_key: string, flags: number, max_participants?: number | null, tags?: string[], redirect_uris: string | null[], interactions_endpoint_url?: string | null, role_connections_verification_url?: string | null, owner: DiscordUserResponse, approximate_guild_count?: number | null, approximate_user_install_count: number, approximate_user_authorization_count: number, explicit_content_filter: DiscordApplicationExplicitContentFilterTypes, team?: (null | DiscordTeamResponse) };  //object
export type DiscordPrivateChannelLocation = { id: string, kind: (DiscordEmbeddedActivityLocationKind), channel_id: DiscordSnowflakeType };  //object
export type DiscordPrivateChannelResponse = { id: DiscordSnowflakeType, type: (DiscordChannelTypes), last_message_id?: (null | DiscordSnowflakeType), flags: number, last_pin_timestamp?: string | null, recipients: DiscordUserResponse[] };  //object
export type DiscordPrivateGroupChannelResponse = { id: DiscordSnowflakeType, type: (DiscordChannelTypes), last_message_id?: (null | DiscordSnowflakeType), flags: number, last_pin_timestamp?: string | null, recipients: DiscordUserResponse[], name?: string | null, icon?: string | null, owner_id: DiscordSnowflakeType, managed?: boolean, application_id?: DiscordSnowflakeType };  //object
export type DiscordPrivateGuildMemberResponse = { avatar?: string | null, avatar_decoration_data?: (null | DiscordUserAvatarDecorationResponse), banner?: string | null, communication_disabled_until?: string | null, flags: number, joined_at: string, nick?: string | null, pending: boolean, premium_since?: string | null, roles: DiscordSnowflakeType[], collectibles?: (null | DiscordUserCollectiblesResponse), user: DiscordUserResponse, mute: boolean, deaf: boolean, permissions?: string };  //object
export type DiscordProvisionalTokenResponse = { token_type: string, access_token: string, expires_in: number, scope: string, id_token: string, refresh_token?: string | null, scopes?: string[] | null, expires_at_s?: number | null };  //object
export type DiscordPruneGuildRequest = { days?: number | null, compute_prune_count?: boolean | null, include_roles?: (string | DiscordSnowflakeType[] | null) };  //object
export type DiscordPurchaseNotificationResponse = { type: DiscordPurchaseType, guild_product_purchase?: DiscordGuildProductPurchaseResponse };  //object
export type DiscordPurchaseType = (0);  //integer
export type DiscordQuarantineUserAction = { type: (DiscordAutomodActionType), metadata?: (null | DiscordQuarantineUserActionMetadata) };  //object
export type DiscordQuarantineUserActionMetadata = object;  //object
export type DiscordQuarantineUserActionMetadataResponse = object;  //object
export type DiscordQuarantineUserActionResponse = { type: (DiscordAutomodActionType), metadata: DiscordQuarantineUserActionMetadataResponse };  //object
export type DiscordReactionTypes = (0 | 1);  //integer
export type DiscordResolvedObjectsResponse = { users?: object | null, members?: object | null, channels?: object | null, roles?: object | null };  //object
export type DiscordResourceChannelResponse = { channel_id: DiscordSnowflakeType, title: string, emoji?: DiscordSettingsEmojiResponse, icon?: string, description: string };  //object
export type DiscordRichEmbed = { type?: string | null, url?: string | null, title?: string | null, color?: number | null, timestamp?: string | null, description?: string | null, author?: (null | DiscordRichEmbedAuthor), image?: (null | DiscordRichEmbedImage), thumbnail?: (null | DiscordRichEmbedThumbnail), footer?: (null | DiscordRichEmbedFooter), fields?: DiscordRichEmbedField[] | null, provider?: (null | DiscordRichEmbedProvider), video?: (null | DiscordRichEmbedVideo) };  //object
export type DiscordRichEmbedAuthor = { name?: string | null, url?: string | null, icon_url?: string | null };  //object
export type DiscordRichEmbedField = { name: string, value: string, inline?: boolean | null };  //object
export type DiscordRichEmbedFooter = { text?: string | null, icon_url?: string | null };  //object
export type DiscordRichEmbedImage = { url?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, placeholder_version?: number | null, is_animated?: boolean | null, description?: string | null };  //object
export type DiscordRichEmbedProvider = { name?: string | null, url?: string | null };  //object
export type DiscordRichEmbedThumbnail = { url?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, placeholder_version?: number | null, is_animated?: boolean | null, description?: string | null };  //object
export type DiscordRichEmbedVideo = { url?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, placeholder_version?: number | null, is_animated?: boolean | null, description?: string | null };  //object
export type DiscordRoleSelectComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordRoleSelectDefaultValue[] | null };  //object
export type DiscordRoleSelectComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordRoleSelectDefaultValue[] | null };  //object
export type DiscordRoleSelectComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, placeholder?: string, min_values?: number | null, max_values?: number | null, disabled?: boolean, default_values?: DiscordRoleSelectDefaultValueResponse[] };  //object
export type DiscordRoleSelectDefaultValue = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordRoleSelectDefaultValueResponse = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordSDKMessageRequest = { content?: string | null, embeds?: DiscordRichEmbed[] | null, allowed_mentions?: (null | DiscordMessageAllowedMentionsRequest), sticker_ids?: DiscordSnowflakeType[] | null, components?: (DiscordActionRowComponentForMessageRequest | DiscordContainerComponentForMessageRequest | DiscordFileComponentForMessageRequest | DiscordMediaGalleryComponentForMessageRequest | DiscordSectionComponentForMessageRequest | DiscordSeparatorComponentForMessageRequest | DiscordTextDisplayComponentForMessageRequest)[] | null, flags?: number | null, attachments?: DiscordMessageAttachmentRequest[] | null, poll?: (null | DiscordPollCreateRequest), shared_client_theme?: (null | DiscordCustomClientThemeShareRequest), confetti_potion?: (null | DiscordConfettiPotionCreateRequest), message_reference?: (null | DiscordMessageReferenceRequest), nonce?: (number | string | null), enforce_nonce?: boolean | null, tts?: boolean | null };  //object
export type DiscordScheduledEventResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, name: string, description?: string | null, channel_id?: (null | DiscordSnowflakeType), creator_id?: (null | DiscordSnowflakeType), creator?: DiscordUserResponse, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, status: DiscordGuildScheduledEventStatuses, entity_type: DiscordGuildScheduledEventEntityTypes, entity_id?: (null | DiscordSnowflakeType), user_count?: number, privacy_level: DiscordGuildScheduledEventPrivacyLevels, user_rsvp?: (null | DiscordScheduledEventUserResponse) };  //object
export type DiscordScheduledEventUserResponse = { guild_scheduled_event_id: DiscordSnowflakeType, user_id: DiscordSnowflakeType, user?: DiscordUserResponse, member?: DiscordGuildMemberResponse };  //object
export type DiscordSectionComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, components: DiscordTextDisplayComponentForMessageRequest[], accessory: (DiscordButtonComponentForMessageRequest | DiscordThumbnailComponentForMessageRequest) };  //object
export type DiscordSectionComponentResponse = { type: (DiscordMessageComponentTypes), id: number, components: DiscordTextDisplayComponentResponse[], accessory: (DiscordButtonComponentResponse | DiscordThumbnailComponentResponse) };  //object
export type DiscordSeparatorComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, spacing?: (null | DiscordMessageComponentSeparatorSpacingSize), divider?: boolean | null };  //object
export type DiscordSeparatorComponentResponse = { type: (DiscordMessageComponentTypes), id: number, spacing: DiscordMessageComponentSeparatorSpacingSize, divider: boolean };  //object
export type DiscordSettingsEmojiResponse = { id?: (null | DiscordSnowflakeType), name?: string | null, animated: boolean };  //object
export type DiscordSlackWebhook = { text?: string | null, username?: string | null, icon_url?: string | null, attachments?: DiscordWebhookSlackEmbed[] | null };  //object
export type DiscordSnowflakeSelectDefaultValueTypes = ("user" | "role" | "channel");  //string
export type DiscordSnowflakeType = `${number}`; //Type overwrite more precise
export type DiscordSortingOrder = ("asc" | "desc");  //string
export type DiscordSoundboardCreateRequest = { name: string, volume?: number | null, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, sound: string };  //object
export type DiscordSoundboardPatchRequestPartial = { name?: string, volume?: number | null, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordSoundboardSoundResponse = { name: string, sound_id: DiscordSnowflakeType, volume: number, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, guild_id?: DiscordSnowflakeType, available: boolean, user?: DiscordUserResponse };  //object
export type DiscordSoundboardSoundSendRequest = { sound_id: DiscordSnowflakeType, source_guild_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordSpamLinkRuleResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, creator_id: DiscordSnowflakeType, name: string, event_type: DiscordAutomodEventType, actions: (DiscordBlockMessageActionResponse | DiscordFlagToChannelActionResponse | DiscordQuarantineUserActionResponse | DiscordUserCommunicationDisabledActionResponse)[], trigger_type: (DiscordAutomodTriggerType), enabled: boolean, exempt_roles: DiscordSnowflakeType[], exempt_channels: DiscordSnowflakeType[], trigger_metadata: DiscordSpamLinkTriggerMetadataResponse };  //object
export type DiscordSpamLinkTriggerMetadataResponse = object;  //object
export type DiscordStageInstanceResponse = { guild_id: DiscordSnowflakeType, channel_id: DiscordSnowflakeType, topic: string, privacy_level: DiscordStageInstancesPrivacyLevels, id: DiscordSnowflakeType, discoverable_disabled: boolean, guild_scheduled_event_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordStageInstancesPrivacyLevels = (1 | 2);  //integer
export type DiscordStageScheduledEventCreateRequest = { name: string, description?: string | null, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, privacy_level: DiscordGuildScheduledEventPrivacyLevels, entity_type: (DiscordGuildScheduledEventEntityTypes), channel_id?: (null | DiscordSnowflakeType), entity_metadata?: (null | DiscordEntityMetadataStageInstance) };  //object
export type DiscordStageScheduledEventPatchRequestPartial = { status?: (null | DiscordGuildScheduledEventStatuses), name?: string, description?: string | null, image?: string | null, scheduled_start_time?: string, scheduled_end_time?: string | null, entity_type?: (null | (DiscordGuildScheduledEventEntityTypes)), privacy_level?: DiscordGuildScheduledEventPrivacyLevels, channel_id?: (null | DiscordSnowflakeType), entity_metadata?: (null | DiscordEntityMetadataStageInstance) };  //object
export type DiscordStageScheduledEventResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, name: string, description?: string | null, channel_id?: (null | DiscordSnowflakeType), creator_id?: (null | DiscordSnowflakeType), creator?: DiscordUserResponse, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, status: DiscordGuildScheduledEventStatuses, entity_type: (DiscordGuildScheduledEventEntityTypes), entity_id?: (null | DiscordSnowflakeType), user_count?: number, privacy_level: DiscordGuildScheduledEventPrivacyLevels, user_rsvp?: (null | DiscordScheduledEventUserResponse), entity_metadata?: (null | DiscordEntityMetadataStageInstanceResponse) };  //object
export type DiscordStandardStickerResponse = { id: DiscordSnowflakeType, name: string, tags: string, type: (DiscordStickerTypes), format_type?: (null | DiscordStickerFormatTypes), description?: string | null, pack_id: DiscordSnowflakeType, sort_value: number };  //object
export type DiscordStickerFormatTypes = (1 | 2 | 3 | 4);  //integer
export type DiscordStickerPackCollectionResponse = { sticker_packs: DiscordStickerPackResponse[] };  //object
export type DiscordStickerPackResponse = { id: DiscordSnowflakeType, sku_id: DiscordSnowflakeType, name: string, description?: string | null, stickers: DiscordStandardStickerResponse[], cover_sticker_id?: DiscordSnowflakeType, banner_asset_id?: DiscordSnowflakeType };  //object
export type DiscordStickerTypes = (1 | 2);  //integer
export type DiscordStringSelectComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, options: DiscordStringSelectOptionForRequest[] };  //object
export type DiscordStringSelectComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, options: DiscordStringSelectOptionForRequest[] };  //object
export type DiscordStringSelectComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, placeholder?: string, min_values?: number | null, max_values?: number | null, disabled?: boolean, options: DiscordStringSelectOptionResponse[] };  //object
export type DiscordStringSelectOptionForRequest = { label: string, value: string, description?: string | null, default?: boolean | null, emoji?: (null | DiscordComponentEmojiForRequest) };  //object
export type DiscordStringSelectOptionResponse = { label: string, value: string, description?: string, emoji?: DiscordComponentEmojiResponse, default?: boolean };  //object
export type DiscordTeamMemberResponse = { user: DiscordUserResponse, team_id: DiscordSnowflakeType, membership_state: DiscordTeamMembershipStates };  //object
export type DiscordTeamMembershipStates = (1 | 2);  //integer
export type DiscordTeamResponse = { id: DiscordSnowflakeType, icon?: string | null, name: string, owner_user_id: DiscordSnowflakeType, members: DiscordTeamMemberResponse[] };  //object
export type DiscordTextDisplayComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, content: string };  //object
export type DiscordTextDisplayComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, content: string };  //object
export type DiscordTextDisplayComponentResponse = { type: (DiscordMessageComponentTypes), id: number, content: string };  //object
export type DiscordTextInputComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, style: DiscordTextInputStyleTypes, label?: string | null, value?: string | null, placeholder?: string | null, required?: boolean | null, min_length?: number | null, max_length?: number | null };  //object
export type DiscordTextInputComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, style: DiscordTextInputStyleTypes, label?: string | null, value?: string, placeholder?: string, required?: boolean, min_length?: number | null, max_length?: number | null };  //object
export type DiscordTextInputStyleTypes = (1 | 2);  //integer
export type DiscordThreadAutoArchiveDuration = (60 | 1440 | 4320 | 10080);  //integer
export type DiscordThreadMemberResponse = { id: DiscordSnowflakeType, user_id: DiscordSnowflakeType, join_timestamp: string, flags: number, member?: DiscordGuildMemberResponse };  //object
export type DiscordThreadMetadataResponse = { archived: boolean, archive_timestamp?: string | null, auto_archive_duration: DiscordThreadAutoArchiveDuration, locked: boolean, create_timestamp?: string, invitable?: boolean };  //object
export type DiscordThreadResponse = { id: DiscordSnowflakeType, type: (DiscordChannelTypes), last_message_id?: (null | DiscordSnowflakeType), flags: number, last_pin_timestamp?: string | null, guild_id: DiscordSnowflakeType, name: string, parent_id?: (null | DiscordSnowflakeType), rate_limit_per_user?: number, bitrate?: number, user_limit?: number, rtc_region?: string | null, video_quality_mode?: DiscordVideoQualityModes, permissions?: string | null, owner_id: DiscordSnowflakeType, thread_metadata: DiscordThreadMetadataResponse, message_count: number, member_count: number, total_message_sent: number, applied_tags?: DiscordSnowflakeType[], member?: DiscordThreadMemberResponse };  //object
export type DiscordThreadSearchResponse = { threads: DiscordThreadResponse[], members: DiscordThreadMemberResponse[], has_more: boolean, first_messages?: DiscordMessageResponse[], total_results: number };  //object
export type DiscordThreadSearchTagSetting = ("match_all" | "match_some");  //string
export type DiscordThreadSortOrder = (0 | 1);  //integer
export type DiscordThreadSortingMode = ("relevance" | "creation_time" | "last_message_time" | "archive_time");  //string
export type DiscordThreadsResponse = { threads: DiscordThreadResponse[], members: DiscordThreadMemberResponse[], has_more: boolean, first_messages?: DiscordMessageResponse[] };  //object
export type DiscordThumbnailComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, description?: string | null, spoiler?: boolean | null, media: DiscordUnfurledMediaRequest };  //object
export type DiscordThumbnailComponentResponse = { type: (DiscordMessageComponentTypes), id: number, media: DiscordUnfurledMediaResponse, description?: string | null, spoiler: boolean };  //object
export type DiscordTypingIndicatorResponse = object;  //object
export type DiscordUInt32Type = number;  //integer
export type DiscordUnbanUserFromGuildRequest = object;  //object
export type DiscordUnfurledMediaRequest = { url: string };  //object
export type DiscordUnfurledMediaRequestWithAttachmentReferenceRequired = { url: string };  //object
export type DiscordUnfurledMediaResponse = { id: DiscordSnowflakeType, url: string, proxy_url: string, width?: number | null, height?: number | null, content_type?: string | null, attachment_id?: DiscordSnowflakeType };  //object
export type DiscordUpdateApplicationUserRoleConnectionRequest = { platform_name?: string | null, platform_username?: string | null, metadata?: object | null };  //object
export type DiscordUpdateDMRequestPartial = { name?: string | null };  //object
export type DiscordUpdateDefaultReactionEmojiRequest = { emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null };  //object
export type DiscordUpdateGroupDMRequestPartial = { name?: string | null, icon?: string | null };  //object
export type DiscordUpdateGuildChannelRequestPartial = { type?: (null | (DiscordChannelTypes)), name?: string, position?: number | null, topic?: string | null, bitrate?: number | null, user_limit?: number | null, nsfw?: boolean | null, rate_limit_per_user?: number | null, parent_id?: (null | DiscordSnowflakeType), permission_overwrites?: DiscordChannelPermissionOverwriteRequest[] | null, rtc_region?: string | null, video_quality_mode?: (null | DiscordVideoQualityModes), default_auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), default_reaction_emoji?: (null | DiscordUpdateDefaultReactionEmojiRequest), default_thread_rate_limit_per_user?: number | null, default_sort_order?: (null | DiscordThreadSortOrder), default_forum_layout?: (null | DiscordForumLayout), default_tag_setting?: (null | DiscordThreadSearchTagSetting), flags?: number | null, available_tags?: DiscordUpdateThreadTagRequest[] | null };  //object
export type DiscordUpdateGuildOnboardingRequest = { prompts?: DiscordUpdateOnboardingPromptRequest[] | null, enabled?: boolean | null, default_channel_ids?: DiscordSnowflakeType[] | null, mode?: (null | DiscordGuildOnboardingMode) };  //object
export type DiscordUpdateMessageInteractionCallbackRequest = { type: (DiscordInteractionCallbackTypes), data?: (null | DiscordIncomingWebhookUpdateForInteractionCallbackRequestPartial) };  //object
export type DiscordUpdateMessageInteractionCallbackResponse = { type: (DiscordInteractionCallbackTypes), message: DiscordMessageResponse };  //object
export type DiscordUpdateOnboardingPromptRequest = { title: string, options: DiscordOnboardingPromptOptionRequest[], single_select?: boolean | null, required?: boolean | null, in_onboarding?: boolean | null, type?: (null | DiscordOnboardingPromptType), id: DiscordSnowflakeType };  //object
export type DiscordUpdateRolePositionsRequest = { id?: (null | DiscordSnowflakeType), position?: number | null };  //object
export type DiscordUpdateRoleRequestPartial = { name?: string | null, permissions?: number | null, color?: number | null, hoist?: boolean | null, mentionable?: boolean | null, icon?: string | null, unicode_emoji?: string | null };  //object
export type DiscordUpdateSelfVoiceStateRequestPartial = { request_to_speak_timestamp?: string | null, suppress?: boolean | null, channel_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordUpdateThreadRequestPartial = { name?: string | null, archived?: boolean | null, locked?: boolean | null, invitable?: boolean | null, auto_archive_duration?: (null | DiscordThreadAutoArchiveDuration), rate_limit_per_user?: number | null, flags?: number | null, applied_tags?: DiscordSnowflakeType[] | null, bitrate?: number | null, user_limit?: number | null, rtc_region?: string | null, video_quality_mode?: (null | DiscordVideoQualityModes) };  //object
export type DiscordUpdateThreadTagRequest = { name: string, emoji_id?: (null | DiscordSnowflakeType), emoji_name?: string | null, moderated?: boolean | null, id?: (null | DiscordSnowflakeType) };  //object
export type DiscordUpdateVoiceStateRequestPartial = { suppress?: boolean | null, channel_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordUserAvatarDecorationResponse = { asset: string, sku_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordUserCollectiblesResponse = { nameplate?: (null | DiscordUserNameplateResponse) };  //object
export type DiscordUserCommunicationDisabledAction = { type: (DiscordAutomodActionType), metadata: DiscordUserCommunicationDisabledActionMetadata };  //object
export type DiscordUserCommunicationDisabledActionMetadata = { duration_seconds?: number | null };  //object
export type DiscordUserCommunicationDisabledActionMetadataResponse = { duration_seconds: number };  //object
export type DiscordUserCommunicationDisabledActionResponse = { type: (DiscordAutomodActionType), metadata: DiscordUserCommunicationDisabledActionMetadataResponse };  //object
export type DiscordUserGuildOnboardingResponse = { guild_id: DiscordSnowflakeType, prompts: DiscordOnboardingPromptResponse[], default_channel_ids: DiscordSnowflakeType[], enabled: boolean };  //object
export type DiscordUserNameplateResponse = { sku_id?: (null | DiscordSnowflakeType), asset: string, label: string, palette: DiscordNameplatePalette };  //object
export type DiscordUserNotificationSettings = (0 | 1);  //integer
export type DiscordUserPIIResponse = { id: DiscordSnowflakeType, username: string, avatar?: string | null, discriminator: string, public_flags: number, flags: DiscordInt53Type, bot?: boolean, system?: boolean, banner?: string | null, accent_color?: number | null, global_name?: string | null, avatar_decoration_data?: (null | DiscordUserAvatarDecorationResponse), collectibles?: (null | DiscordUserCollectiblesResponse), primary_guild?: (null | DiscordUserPrimaryGuildResponse), mfa_enabled: boolean, locale: DiscordAvailableLocalesEnum, premium_type?: DiscordPremiumTypes, email?: string | null, verified?: boolean };  //object
export type DiscordUserPrimaryGuildResponse = { identity_guild_id?: (null | DiscordSnowflakeType), identity_enabled?: boolean | null, tag?: string | null, badge?: string | null };  //object
export type DiscordUserResponse = { id: DiscordSnowflakeType, username: string, avatar?: string | null, discriminator: string, public_flags: number, flags: DiscordInt53Type, bot?: boolean, system?: boolean, banner?: string | null, accent_color?: number | null, global_name?: string | null, avatar_decoration_data?: (null | DiscordUserAvatarDecorationResponse), collectibles?: (null | DiscordUserCollectiblesResponse), primary_guild?: (null | DiscordUserPrimaryGuildResponse) };  //object
export type DiscordUserSelectComponentForMessageRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordUserSelectDefaultValue[] | null };  //object
export type DiscordUserSelectComponentForModalRequest = { type: (DiscordMessageComponentTypes), id?: number | null, custom_id: string, placeholder?: string | null, min_values?: number | null, max_values?: number | null, disabled?: boolean | null, required?: boolean | null, default_values?: DiscordUserSelectDefaultValue[] | null };  //object
export type DiscordUserSelectComponentResponse = { type: (DiscordMessageComponentTypes), id: number, custom_id: string, placeholder?: string, min_values?: number | null, max_values?: number | null, disabled?: boolean, default_values?: DiscordUserSelectDefaultValueResponse[] };  //object
export type DiscordUserSelectDefaultValue = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordUserSelectDefaultValueResponse = { type: (DiscordSnowflakeSelectDefaultValueTypes), id: DiscordSnowflakeType };  //object
export type DiscordVanityURLErrorResponse = { message: string, code: number };  //object
export type DiscordVanityURLResponse = { code?: string | null, uses: number, error?: (null | DiscordVanityURLErrorResponse) };  //object
export type DiscordVerificationLevels = (0 | 1 | 2 | 3 | 4);  //integer
export type DiscordVideoQualityModes = (1 | 2);  //integer
export type DiscordVoiceRegionResponse = { id: string, name: string, custom: boolean, deprecated: boolean, optimal: boolean };  //object
export type DiscordVoiceScheduledEventCreateRequest = { name: string, description?: string | null, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, privacy_level: DiscordGuildScheduledEventPrivacyLevels, entity_type: (DiscordGuildScheduledEventEntityTypes), channel_id?: (null | DiscordSnowflakeType), entity_metadata?: (null | DiscordEntityMetadataVoice) };  //object
export type DiscordVoiceScheduledEventPatchRequestPartial = { status?: (null | DiscordGuildScheduledEventStatuses), name?: string, description?: string | null, image?: string | null, scheduled_start_time?: string, scheduled_end_time?: string | null, entity_type?: (null | (DiscordGuildScheduledEventEntityTypes)), privacy_level?: DiscordGuildScheduledEventPrivacyLevels, channel_id?: (null | DiscordSnowflakeType), entity_metadata?: (null | DiscordEntityMetadataVoice) };  //object
export type DiscordVoiceScheduledEventResponse = { id: DiscordSnowflakeType, guild_id: DiscordSnowflakeType, name: string, description?: string | null, channel_id?: (null | DiscordSnowflakeType), creator_id?: (null | DiscordSnowflakeType), creator?: DiscordUserResponse, image?: string | null, scheduled_start_time: string, scheduled_end_time?: string | null, status: DiscordGuildScheduledEventStatuses, entity_type: (DiscordGuildScheduledEventEntityTypes), entity_id?: (null | DiscordSnowflakeType), user_count?: number, privacy_level: DiscordGuildScheduledEventPrivacyLevels, user_rsvp?: (null | DiscordScheduledEventUserResponse), entity_metadata?: (null | DiscordEntityMetadataVoiceResponse) };  //object
export type DiscordVoiceStateResponse = { channel_id?: (null | DiscordSnowflakeType), deaf: boolean, guild_id?: (null | DiscordSnowflakeType), member?: DiscordGuildMemberResponse, mute: boolean, request_to_speak_timestamp?: string | null, suppress: boolean, self_stream?: boolean | null, self_deaf: boolean, self_mute: boolean, self_video: boolean, session_id: string, user_id: DiscordSnowflakeType };  //object
export type DiscordWebhookSlackEmbed = { title?: string | null, title_link?: string | null, text?: string | null, color?: string | null, ts?: number | null, pretext?: string | null, footer?: string | null, footer_icon?: string | null, author_name?: string | null, author_link?: string | null, author_icon?: string | null, image_url?: string | null, thumb_url?: string | null, fields?: DiscordWebhookSlackEmbedField[] | null };  //object
export type DiscordWebhookSlackEmbedField = { name?: string | null, value?: string | null, inline?: boolean | null };  //object
export type DiscordWebhookSourceChannelResponse = { id: DiscordSnowflakeType, name: string };  //object
export type DiscordWebhookSourceGuildResponse = { id: DiscordSnowflakeType, icon?: string | null, name: string };  //object
export type DiscordWebhookTypes = (1 | 2 | 3);  //integer
export type DiscordWelcomeMessageResponse = { author_ids: DiscordSnowflakeType[], message: string };  //object
export type DiscordWelcomeScreenPatchRequestPartial = { description?: string | null, welcome_channels?: DiscordGuildWelcomeChannel[] | null, enabled?: boolean | null };  //object
export type DiscordWidgetActivity = { name: string };  //object
export type DiscordWidgetChannel = { id: DiscordSnowflakeType, name: string, position: number };  //object
export type DiscordWidgetImageStyles = ("shield" | "banner1" | "banner2" | "banner3" | "banner4");  //string
export type DiscordWidgetMember = { id: string, username: string, discriminator: DiscordWidgetUserDiscriminator, avatar?: null, status: string, avatar_url: string, activity?: DiscordWidgetActivity, deaf?: boolean, mute?: boolean, self_deaf?: boolean, self_mute?: boolean, suppress?: boolean, channel_id?: DiscordSnowflakeType };  //object
export type DiscordWidgetResponse = { id: DiscordSnowflakeType, name: string, instant_invite?: string | null, channels: DiscordWidgetChannel[], members: DiscordWidgetMember[], presence_count: number };  //object
export type DiscordWidgetSettingsResponse = { enabled: boolean, channel_id?: (null | DiscordSnowflakeType) };  //object
export type DiscordWidgetUserDiscriminator = ("0000");  //string
export type DiscordError = { code: number, message: string };  //object
export type DiscordInnerErrors = { _errors: DiscordError[] };  //object
export type DiscordErrorDetails = (object | DiscordInnerErrors);  //undefined
export type DiscordErrorResponse = (DiscordError & { errors?: DiscordErrorDetails });  //object
export type DiscordRatelimitedResponse = (DiscordError & { retry_after: number, global: boolean });  //object
export type DiscordGatewayEventNames = 'HELLO' | 'READY' | 'RESUMED' | 'RECONNECT' | 'INVALID_SESSION' | 'APPLICATION_COMMAND_PERMISSIONS_UPDATE' | 'AUTO_MODERATION_RULE_CREATE' | 'AUTO_MODERATION_RULE_UPDATE' | 'AUTO_MODERATION_RULE_DELETE' | 'AUTO_MODERATION_ACTION_EXECUTION' | 'CHANNEL_CREATE' | 'CHANNEL_UPDATE' | 'CHANNEL_DELETE' | 'CHANNEL_PINS_UPDATE' | 'THREAD_CREATE' | 'THREAD_UPDATE' | 'THREAD_DELETE' | 'THREAD_LIST_SYNC' | 'THREAD_MEMBER_UPDATE' | 'THREAD_MEMBERS_UPDATE' | 'ENTITLEMENT_CREATE' | 'ENTITLEMENT_UPDATE' | 'ENTITLEMENT_DELETE' | 'GUILD_CREATE' | 'GUILD_UPDATE' | 'GUILD_DELETE' | 'GUILD_AUDIT_LOG_ENTRY_CREATE' | 'GUILD_BAN_ADD' | 'GUILD_BAN_REMOVE' | 'GUILD_EMOJIS_UPDATE' | 'GUILD_STICKERS_UPDATE' | 'GUILD_INTEGRATIONS_UPDATE' | 'GUILD_MEMBER_ADD' | 'GUILD_MEMBER_REMOVE' | 'GUILD_MEMBER_UPDATE' | 'GUILD_MEMBERS_CHUNK' | 'GUILD_ROLE_CREATE' | 'GUILD_ROLE_UPDATE' | 'GUILD_ROLE_DELETE' | 'GUILD_SCHEDULED_EVENT_CREATE' | 'GUILD_SCHEDULED_EVENT_UPDATE' | 'GUILD_SCHEDULED_EVENT_DELETE' | 'GUILD_SCHEDULED_EVENT_USER_ADD' | 'GUILD_SCHEDULED_EVENT_USER_REMOVE' | 'GUILD_SOUNDBOARD_SOUND_CREATE' | 'GUILD_SOUNDBOARD_SOUND_UPDATE' | 'GUILD_SOUNDBOARD_SOUND_DELETE' | 'GUILD_SOUNDBOARD_SOUNDS_UPDATE' | 'SOUNDBOARD_SOUNDS' | 'INTEGRATION_CREATE' | 'INTEGRATION_UPDATE' | 'INTEGRATION_DELETE' | 'INTERACTION_CREATE' | 'INVITE_CREATE' | 'INVITE_DELETE' | 'MESSAGE_CREATE' | 'MESSAGE_UPDATE' | 'MESSAGE_DELETE' | 'MESSAGE_DELETE_BULK' | 'MESSAGE_REACTION_ADD' | 'MESSAGE_REACTION_REMOVE' | 'MESSAGE_REACTION_REMOVE_ALL' | 'MESSAGE_REACTION_REMOVE_EMOJI' | 'PRESENCE_UPDATE' | 'STAGE_INSTANCE_CREATE' | 'STAGE_INSTANCE_UPDATE' | 'STAGE_INSTANCE_DELETE' | 'SUBSCRIPTION_CREATE' | 'SUBSCRIPTION_UPDATE' | 'SUBSCRIPTION_DELETE' | 'TYPING_START' | 'USER_UPDATE' | 'VOICE_CHANNEL_EFFECT_SEND' | 'VOICE_STATE_UPDATE' | 'VOICE_SERVER_UPDATE' | 'WEBHOOKS_UPDATE' | 'MESSAGE_POLL_VOTE_ADD' | 'MESSAGE_POLL_VOTE_REMOVE';

export interface DiscordGatewayPayload {
    "op": number;
    "d": unknown;
    "s": number | null;
    "t": string | null;
}

const { stringify } = JSON; export function getMyApplication(): RequestJson<DiscordPrivateApplicationResponse> { let path = "/applications/@me"; return new RequestJson<DiscordPrivateApplicationResponse>(path, RequestMethod.GET); }
export function updateMyApplication(body: DiscordApplicationFormPartial): RequestJson<DiscordPrivateApplicationResponse> { let path = "/applications/@me"; return new RequestJson<DiscordPrivateApplicationResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getApplication(applicationId: DiscordSnowflakeType): RequestJson<DiscordPrivateApplicationResponse> { let path = `/applications/${applicationId}`; return new RequestJson<DiscordPrivateApplicationResponse>(path, RequestMethod.GET); }
export function updateApplication(applicationId: DiscordSnowflakeType, body: DiscordApplicationFormPartial): RequestJson<DiscordPrivateApplicationResponse> { let path = `/applications/${applicationId}`; return new RequestJson<DiscordPrivateApplicationResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function applicationsGetActivityInstance(applicationId: DiscordSnowflakeType, instanceId: string): RequestJson<DiscordEmbeddedActivityInstance> { let path = `/applications/${applicationId}/activity-instances/${instanceId}`; return new RequestJson<DiscordEmbeddedActivityInstance>(path, RequestMethod.GET); }
export function uploadApplicationAttachment(applicationId: DiscordSnowflakeType): RequestJson<DiscordActivitiesAttachmentResponse> { let path = `/applications/${applicationId}/attachment`; return new RequestJson<DiscordActivitiesAttachmentResponse>(path, RequestMethod.POST); }
export function listApplicationCommands(applicationId: DiscordSnowflakeType, query?: {
    with_localizations?: boolean;
}): RequestJson<DiscordApplicationCommandResponse[] | null> {
    let path = `/applications/${applicationId}/commands`; if (query)
        path += setQuery(query); return new RequestJson<DiscordApplicationCommandResponse[] | null>(path, RequestMethod.GET);
}
export function bulkSetApplicationCommands(applicationId: DiscordSnowflakeType, body: DiscordApplicationCommandUpdateRequest[] | null): RequestJson<DiscordApplicationCommandResponse[] | null> { let path = `/applications/${applicationId}/commands`; return new RequestJson<DiscordApplicationCommandResponse[] | null>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function createApplicationCommand(applicationId: DiscordSnowflakeType, body: DiscordApplicationCommandCreateRequest): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/commands`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getApplicationCommand(applicationId: DiscordSnowflakeType, commandId: DiscordSnowflakeType): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/commands/${commandId}`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.GET); }
export function deleteApplicationCommand(applicationId: DiscordSnowflakeType, commandId: DiscordSnowflakeType): RequestJson<void> { let path = `/applications/${applicationId}/commands/${commandId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateApplicationCommand(applicationId: DiscordSnowflakeType, commandId: DiscordSnowflakeType, body: DiscordApplicationCommandPatchRequestPartial): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/commands/${commandId}`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listApplicationEmojis(applicationId: DiscordSnowflakeType): RequestJson<DiscordListApplicationEmojisResponse> { let path = `/applications/${applicationId}/emojis`; return new RequestJson<DiscordListApplicationEmojisResponse>(path, RequestMethod.GET); }
export function createApplicationEmoji(applicationId: DiscordSnowflakeType, body: { name: string, image: string }): RequestJson<DiscordEmojiResponse> { let path = `/applications/${applicationId}/emojis`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getApplicationEmoji(applicationId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType): RequestJson<DiscordEmojiResponse> { let path = `/applications/${applicationId}/emojis/${emojiId}`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.GET); }
export function deleteApplicationEmoji(applicationId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType): RequestJson<void> { let path = `/applications/${applicationId}/emojis/${emojiId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateApplicationEmoji(applicationId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType, body: { name?: string }): RequestJson<DiscordEmojiResponse> { let path = `/applications/${applicationId}/emojis/${emojiId}`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getEntitlements(applicationId: DiscordSnowflakeType, query?: {
    user_id?: DiscordSnowflakeType;
    sku_ids?: (string | (null | DiscordSnowflakeType)[]);
    guild_id?: DiscordSnowflakeType;
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
    limit?: number;
    exclude_ended?: boolean;
    exclude_deleted?: boolean;
    only_active?: boolean;
}): RequestJson<(null | DiscordEntitlementResponse)[]> {
    let path = `/applications/${applicationId}/entitlements`; if (query)
        path += setQuery(query); return new RequestJson<(null | DiscordEntitlementResponse)[]>(path, RequestMethod.GET);
}
export function createEntitlement(applicationId: DiscordSnowflakeType, body: DiscordCreateEntitlementRequestData): RequestJson<DiscordEntitlementResponse> { let path = `/applications/${applicationId}/entitlements`; return new RequestJson<DiscordEntitlementResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getEntitlement(applicationId: DiscordSnowflakeType, entitlementId: DiscordSnowflakeType): RequestJson<DiscordEntitlementResponse> { let path = `/applications/${applicationId}/entitlements/${entitlementId}`; return new RequestJson<DiscordEntitlementResponse>(path, RequestMethod.GET); }
export function deleteEntitlement(applicationId: DiscordSnowflakeType, entitlementId: DiscordSnowflakeType): RequestJson<void> { let path = `/applications/${applicationId}/entitlements/${entitlementId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function consumeEntitlement(applicationId: DiscordSnowflakeType, entitlementId: DiscordSnowflakeType): RequestJson<void> { let path = `/applications/${applicationId}/entitlements/${entitlementId}/consume`; return new RequestJson<void>(path, RequestMethod.POST); }
export function listGuildApplicationCommands(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, query?: {
    with_localizations?: boolean;
}): RequestJson<DiscordApplicationCommandResponse[] | null> {
    let path = `/applications/${applicationId}/guilds/${guildId}/commands`; if (query)
        path += setQuery(query); return new RequestJson<DiscordApplicationCommandResponse[] | null>(path, RequestMethod.GET);
}
export function bulkSetGuildApplicationCommands(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, body: DiscordApplicationCommandUpdateRequest[] | null): RequestJson<DiscordApplicationCommandResponse[] | null> { let path = `/applications/${applicationId}/guilds/${guildId}/commands`; return new RequestJson<DiscordApplicationCommandResponse[] | null>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function createGuildApplicationCommand(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, body: DiscordApplicationCommandCreateRequest): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/guilds/${guildId}/commands`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listGuildApplicationCommandPermissions(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType): RequestJson<DiscordCommandPermissionsResponse[]> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/permissions`; return new RequestJson<DiscordCommandPermissionsResponse[]>(path, RequestMethod.GET); }
export function getGuildApplicationCommand(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commandId: DiscordSnowflakeType): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.GET); }
export function deleteGuildApplicationCommand(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commandId: DiscordSnowflakeType): RequestJson<void> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildApplicationCommand(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commandId: DiscordSnowflakeType, body: DiscordApplicationCommandPatchRequestPartial): RequestJson<DiscordApplicationCommandResponse> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`; return new RequestJson<DiscordApplicationCommandResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getGuildApplicationCommandPermissions(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commandId: DiscordSnowflakeType): RequestJson<DiscordCommandPermissionsResponse> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`; return new RequestJson<DiscordCommandPermissionsResponse>(path, RequestMethod.GET); }
export function setGuildApplicationCommandPermissions(applicationId: DiscordSnowflakeType, guildId: DiscordSnowflakeType, commandId: DiscordSnowflakeType, body: { permissions?: DiscordApplicationCommandPermission[] | null }): RequestJson<DiscordCommandPermissionsResponse> { let path = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`; return new RequestJson<DiscordCommandPermissionsResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function getApplicationRoleConnectionsMetadata(applicationId: DiscordSnowflakeType): RequestJson<DiscordApplicationRoleConnectionsMetadataItemResponse[] | null> { let path = `/applications/${applicationId}/role-connections/metadata`; return new RequestJson<DiscordApplicationRoleConnectionsMetadataItemResponse[] | null>(path, RequestMethod.GET); }
export function updateApplicationRoleConnectionsMetadata(applicationId: DiscordSnowflakeType, body: DiscordApplicationRoleConnectionsMetadataItemRequest[] | null): RequestJson<DiscordApplicationRoleConnectionsMetadataItemResponse[] | null> { let path = `/applications/${applicationId}/role-connections/metadata`; return new RequestJson<DiscordApplicationRoleConnectionsMetadataItemResponse[] | null>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function getChannel(channelId: DiscordSnowflakeType): RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)> { let path = `/channels/${channelId}`; return new RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)>(path, RequestMethod.GET); }
export function deleteChannel(channelId: DiscordSnowflakeType): RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)> { let path = `/channels/${channelId}`; return new RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)>(path, RequestMethod.DELETE); }
export function updateChannel(channelId: DiscordSnowflakeType, body: (DiscordUpdateDMRequestPartial | DiscordUpdateGroupDMRequestPartial | DiscordUpdateGuildChannelRequestPartial | DiscordUpdateThreadRequestPartial)): RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)> { let path = `/channels/${channelId}`; return new RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function followChannel(channelId: DiscordSnowflakeType, body: { webhook_channel_id: DiscordSnowflakeType }): RequestJson<DiscordChannelFollowerResponse> { let path = `/channels/${channelId}/followers`; return new RequestJson<DiscordChannelFollowerResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listChannelInvites(channelId: DiscordSnowflakeType): RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse | null)[] | null> { let path = `/channels/${channelId}/invites`; return new RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse | null)[] | null>(path, RequestMethod.GET); }
export function createChannelInvite(channelId: DiscordSnowflakeType, body: (DiscordCreateGroupDMInviteRequest | DiscordCreateGuildInviteRequest)): RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)> { let path = `/channels/${channelId}/invites`; return new RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listMessages(channelId: DiscordSnowflakeType, query?: {
    around?: DiscordSnowflakeType;
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
    limit?: number;
}): RequestJson<DiscordMessageResponse[] | null> {
    let path = `/channels/${channelId}/messages`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse[] | null>(path, RequestMethod.GET);
}
export function createMessage(channelId: DiscordSnowflakeType, body: DiscordMessageCreateRequest): RequestJson<DiscordMessageResponse> { let path = `/channels/${channelId}/messages`; return new RequestJson<DiscordMessageResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function bulkDeleteMessages(channelId: DiscordSnowflakeType, body: { messages: DiscordSnowflakeType[] }): RequestJson<void> { let path = `/channels/${channelId}/messages/bulk-delete`; return new RequestJson<void>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listPins(channelId: DiscordSnowflakeType, query?: {
    before?: string;
    limit?: number;
}): RequestJson<DiscordPinnedMessagesResponse> {
    let path = `/channels/${channelId}/messages/pins`; if (query)
        path += setQuery(query); return new RequestJson<DiscordPinnedMessagesResponse>(path, RequestMethod.GET);
}
export function createPin(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/messages/pins/${messageId}`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function deletePin(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/messages/pins/${messageId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function getMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<DiscordMessageResponse> { let path = `/channels/${channelId}/messages/${messageId}`; return new RequestJson<DiscordMessageResponse>(path, RequestMethod.GET); }
export function deleteMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, body: DiscordMessageEditRequestPartial): RequestJson<DiscordMessageResponse> { let path = `/channels/${channelId}/messages/${messageId}`; return new RequestJson<DiscordMessageResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function crosspostMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<DiscordMessageResponse> { let path = `/channels/${channelId}/messages/${messageId}/crosspost`; return new RequestJson<DiscordMessageResponse>(path, RequestMethod.POST); }
export function deleteAllMessageReactions(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}/reactions`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function listMessageReactionsByEmoji(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, emojiName: string, query?: {
    after?: DiscordSnowflakeType;
    limit?: number;
    type?: DiscordReactionTypes;
}): RequestJson<DiscordUserResponse[]> {
    let path = `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordUserResponse[]>(path, RequestMethod.GET);
}
export function deleteAllMessageReactionsByEmoji(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, emojiName: string): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function addMyMessageReaction(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, emojiName: string): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function deleteMyMessageReaction(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, emojiName: string): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function deleteUserMessageReaction(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, emojiName: string, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function createThreadFromMessage(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, body: DiscordCreateTextThreadWithMessageRequest): RequestJson<DiscordThreadResponse> { let path = `/channels/${channelId}/messages/${messageId}/threads`; return new RequestJson<DiscordThreadResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function setChannelPermissionOverwrite(channelId: DiscordSnowflakeType, overwriteId: DiscordSnowflakeType, body: { type?: (null | DiscordChannelPermissionOverwrites), allow?: number | null, deny?: number | null }): RequestJson<void> { let path = `/channels/${channelId}/permissions/${overwriteId}`; return new RequestJson<void>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function deleteChannelPermissionOverwrite(channelId: DiscordSnowflakeType, overwriteId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/permissions/${overwriteId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function deprecatedListPins(channelId: DiscordSnowflakeType): RequestJson<DiscordMessageResponse[] | null> { let path = `/channels/${channelId}/pins`; return new RequestJson<DiscordMessageResponse[] | null>(path, RequestMethod.GET); }
export function deprecatedCreatePin(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/pins/${messageId}`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function deprecatedDeletePin(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/pins/${messageId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function getAnswerVoters(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType, answerId: number, query?: {
    after?: DiscordSnowflakeType;
    limit?: number;
}): RequestJson<DiscordPollAnswerDetailsResponse> {
    let path = `/channels/${channelId}/polls/${messageId}/answers/${answerId}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordPollAnswerDetailsResponse>(path, RequestMethod.GET);
}
export function pollExpire(channelId: DiscordSnowflakeType, messageId: DiscordSnowflakeType): RequestJson<DiscordMessageResponse> { let path = `/channels/${channelId}/polls/${messageId}/expire`; return new RequestJson<DiscordMessageResponse>(path, RequestMethod.POST); }
export function addGroupDmUser(channelId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: { access_token?: string | null, nick?: string | null }): RequestJson<(DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse)> { let path = `/channels/${channelId}/recipients/${userId}`; return new RequestJson<(DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse)>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function deleteGroupDmUser(channelId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/recipients/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function sendSoundboardSound(channelId: DiscordSnowflakeType, body: DiscordSoundboardSoundSendRequest): RequestJson<void> { let path = `/channels/${channelId}/send-soundboard-sound`; return new RequestJson<void>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listThreadMembers(channelId: DiscordSnowflakeType, query?: {
    with_member?: boolean;
    limit?: number;
    after?: DiscordSnowflakeType;
}): RequestJson<DiscordThreadMemberResponse[]> {
    let path = `/channels/${channelId}/thread-members`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadMemberResponse[]>(path, RequestMethod.GET);
}
export function joinThread(channelId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/thread-members/@me`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function leaveThread(channelId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/thread-members/@me`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function getThreadMember(channelId: DiscordSnowflakeType, userId: DiscordSnowflakeType, query?: {
    with_member?: boolean;
}): RequestJson<DiscordThreadMemberResponse> {
    let path = `/channels/${channelId}/thread-members/${userId}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadMemberResponse>(path, RequestMethod.GET);
}
export function addThreadMember(channelId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/thread-members/${userId}`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function deleteThreadMember(channelId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/channels/${channelId}/thread-members/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function createThread(channelId: DiscordSnowflakeType, body: (DiscordCreateForumThreadRequest | DiscordCreateTextThreadWithoutMessageRequest)): RequestJson<DiscordCreatedThreadResponse> { let path = `/channels/${channelId}/threads`; return new RequestJson<DiscordCreatedThreadResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listPrivateArchivedThreads(channelId: DiscordSnowflakeType, query?: {
    before?: string;
    limit?: number;
}): RequestJson<DiscordThreadsResponse> {
    let path = `/channels/${channelId}/threads/archived/private`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadsResponse>(path, RequestMethod.GET);
}
export function listPublicArchivedThreads(channelId: DiscordSnowflakeType, query?: {
    before?: string;
    limit?: number;
}): RequestJson<DiscordThreadsResponse> {
    let path = `/channels/${channelId}/threads/archived/public`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadsResponse>(path, RequestMethod.GET);
}
export function threadSearch(channelId: DiscordSnowflakeType, query?: {
    name?: string;
    slop?: number;
    min_id?: DiscordSnowflakeType;
    max_id?: DiscordSnowflakeType;
    tag?: (string | DiscordSnowflakeType[]);
    tag_setting?: DiscordThreadSearchTagSetting;
    archived?: boolean;
    sort_by?: DiscordThreadSortingMode;
    sort_order?: DiscordSortingOrder;
    limit?: number;
    offset?: number;
}): RequestJson<DiscordThreadSearchResponse> {
    let path = `/channels/${channelId}/threads/search`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadSearchResponse>(path, RequestMethod.GET);
}
export function triggerTypingIndicator(channelId: DiscordSnowflakeType): RequestJson<DiscordTypingIndicatorResponse> { let path = `/channels/${channelId}/typing`; return new RequestJson<DiscordTypingIndicatorResponse>(path, RequestMethod.POST); }
export function listMyPrivateArchivedThreads(channelId: DiscordSnowflakeType, query?: {
    before?: DiscordSnowflakeType;
    limit?: number;
}): RequestJson<DiscordThreadsResponse> {
    let path = `/channels/${channelId}/users/@me/threads/archived/private`; if (query)
        path += setQuery(query); return new RequestJson<DiscordThreadsResponse>(path, RequestMethod.GET);
}
export function listChannelWebhooks(channelId: DiscordSnowflakeType): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)[] | null> { let path = `/channels/${channelId}/webhooks`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)[] | null>(path, RequestMethod.GET); }
export function createWebhook(channelId: DiscordSnowflakeType, body: { name: string, avatar?: string | null }): RequestJson<DiscordGuildIncomingWebhookResponse> { let path = `/channels/${channelId}/webhooks`; return new RequestJson<DiscordGuildIncomingWebhookResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getGateway(): RequestJson<DiscordGatewayResponse> { let path = "/gateway"; return new RequestJson<DiscordGatewayResponse>(path, RequestMethod.GET); }
export function getBotGateway(): RequestJson<DiscordGatewayBotResponse> { let path = "/gateway/bot"; return new RequestJson<DiscordGatewayBotResponse>(path, RequestMethod.GET); }
export function getGuildTemplate(code: string): RequestJson<DiscordGuildTemplateResponse> { let path = `/guilds/templates/${code}`; return new RequestJson<DiscordGuildTemplateResponse>(path, RequestMethod.GET); }
export function getGuild(guildId: DiscordSnowflakeType, query?: {
    with_counts?: boolean;
}): RequestJson<DiscordGuildWithCountsResponse> {
    let path = `/guilds/${guildId}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildWithCountsResponse>(path, RequestMethod.GET);
}
export function updateGuild(guildId: DiscordSnowflakeType, body: DiscordGuildPatchRequestPartial): RequestJson<DiscordGuildResponse> { let path = `/guilds/${guildId}`; return new RequestJson<DiscordGuildResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildAuditLogEntries(guildId: DiscordSnowflakeType, query?: {
    user_id?: DiscordSnowflakeType;
    target_id?: DiscordSnowflakeType;
    action_type?: DiscordAuditLogActionTypes;
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
    limit?: number;
}): RequestJson<DiscordGuildAuditLogResponse> {
    let path = `/guilds/${guildId}/audit-logs`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildAuditLogResponse>(path, RequestMethod.GET);
}
export function listAutoModerationRules(guildId: DiscordSnowflakeType): RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse | null)[] | null> { let path = `/guilds/${guildId}/auto-moderation/rules`; return new RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse | null)[] | null>(path, RequestMethod.GET); }
export function createAutoModerationRule(guildId: DiscordSnowflakeType, body: (DiscordDefaultKeywordListUpsertRequest | DiscordKeywordUpsertRequest | DiscordMLSpamUpsertRequest | DiscordMentionSpamUpsertRequest)): RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)> { let path = `/guilds/${guildId}/auto-moderation/rules`; return new RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getAutoModerationRule(guildId: DiscordSnowflakeType, ruleId: DiscordSnowflakeType): RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)> { let path = `/guilds/${guildId}/auto-moderation/rules/${ruleId}`; return new RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)>(path, RequestMethod.GET); }
export function deleteAutoModerationRule(guildId: DiscordSnowflakeType, ruleId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/auto-moderation/rules/${ruleId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateAutoModerationRule(guildId: DiscordSnowflakeType, ruleId: DiscordSnowflakeType, body: (DiscordDefaultKeywordListUpsertRequestPartial | DiscordKeywordUpsertRequestPartial | DiscordMLSpamUpsertRequestPartial | DiscordMentionSpamUpsertRequestPartial)): RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)> { let path = `/guilds/${guildId}/auto-moderation/rules/${ruleId}`; return new RequestJson<(DiscordDefaultKeywordRuleResponse | DiscordKeywordRuleResponse | DiscordMLSpamRuleResponse | DiscordMentionSpamRuleResponse | DiscordSpamLinkRuleResponse)>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildBans(guildId: DiscordSnowflakeType, query?: {
    limit?: number;
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
}): RequestJson<DiscordGuildBanResponse[] | null> {
    let path = `/guilds/${guildId}/bans`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildBanResponse[] | null>(path, RequestMethod.GET);
}
export function getGuildBan(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<DiscordGuildBanResponse> { let path = `/guilds/${guildId}/bans/${userId}`; return new RequestJson<DiscordGuildBanResponse>(path, RequestMethod.GET); }
export function banUserFromGuild(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: DiscordBanUserFromGuildRequest): RequestJson<void> { let path = `/guilds/${guildId}/bans/${userId}`; return new RequestJson<void>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function unbanUserFromGuild(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: DiscordUnbanUserFromGuildRequest): RequestJson<void> { let path = `/guilds/${guildId}/bans/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE).setBody(stringify(body), "application/json"); }
export function bulkBanUsersFromGuild(guildId: DiscordSnowflakeType, body: DiscordBulkBanUsersRequest): RequestJson<DiscordBulkBanUsersResponse> { let path = `/guilds/${guildId}/bulk-ban`; return new RequestJson<DiscordBulkBanUsersResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listGuildChannels(guildId: DiscordSnowflakeType): RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)[] | null> { let path = `/guilds/${guildId}/channels`; return new RequestJson<(DiscordGuildChannelResponse | DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse | DiscordThreadResponse)[] | null>(path, RequestMethod.GET); }
export function createGuildChannel(guildId: DiscordSnowflakeType, body: DiscordCreateGuildChannelRequest): RequestJson<DiscordGuildChannelResponse> { let path = `/guilds/${guildId}/channels`; return new RequestJson<DiscordGuildChannelResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function bulkUpdateGuildChannels(guildId: DiscordSnowflakeType, body: { id?: (null | DiscordSnowflakeType), position?: number | null, parent_id?: (null | DiscordSnowflakeType), lock_permissions?: boolean | null }[]): RequestJson<void> { let path = `/guilds/${guildId}/channels`; return new RequestJson<void>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildEmojis(guildId: DiscordSnowflakeType): RequestJson<DiscordEmojiResponse[] | null> { let path = `/guilds/${guildId}/emojis`; return new RequestJson<DiscordEmojiResponse[] | null>(path, RequestMethod.GET); }
export function createGuildEmoji(guildId: DiscordSnowflakeType, body: { name: string, image: string, roles?: (null | DiscordSnowflakeType)[] | null }): RequestJson<DiscordEmojiResponse> { let path = `/guilds/${guildId}/emojis`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getGuildEmoji(guildId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType): RequestJson<DiscordEmojiResponse> { let path = `/guilds/${guildId}/emojis/${emojiId}`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.GET); }
export function deleteGuildEmoji(guildId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/emojis/${emojiId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildEmoji(guildId: DiscordSnowflakeType, emojiId: DiscordSnowflakeType, body: { name?: string, roles?: (null | DiscordSnowflakeType)[] | null }): RequestJson<DiscordEmojiResponse> { let path = `/guilds/${guildId}/emojis/${emojiId}`; return new RequestJson<DiscordEmojiResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildIntegrations(guildId: DiscordSnowflakeType): RequestJson<(DiscordDiscordIntegrationResponse | DiscordExternalConnectionIntegrationResponse | DiscordGuildSubscriptionIntegrationResponse)[] | null> { let path = `/guilds/${guildId}/integrations`; return new RequestJson<(DiscordDiscordIntegrationResponse | DiscordExternalConnectionIntegrationResponse | DiscordGuildSubscriptionIntegrationResponse)[] | null>(path, RequestMethod.GET); }
export function deleteGuildIntegration(guildId: DiscordSnowflakeType, integrationId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/integrations/${integrationId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function listGuildInvites(guildId: DiscordSnowflakeType): RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse | null)[] | null> { let path = `/guilds/${guildId}/invites`; return new RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse | null)[] | null>(path, RequestMethod.GET); }
export function listGuildMembers(guildId: DiscordSnowflakeType, query?: {
    limit?: number;
    after?: number;
}): RequestJson<DiscordGuildMemberResponse[]> {
    let path = `/guilds/${guildId}/members`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildMemberResponse[]>(path, RequestMethod.GET);
}
export function updateMyGuildMember(guildId: DiscordSnowflakeType, body: { nick?: string | null }): RequestJson<DiscordPrivateGuildMemberResponse> { let path = `/guilds/${guildId}/members/@me`; return new RequestJson<DiscordPrivateGuildMemberResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function searchGuildMembers(guildId: DiscordSnowflakeType, query?: {
    limit?: number;
    query?: string;
}): RequestJson<DiscordGuildMemberResponse[]> {
    let path = `/guilds/${guildId}/members/search`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildMemberResponse[]>(path, RequestMethod.GET);
}
export function getGuildMember(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<DiscordGuildMemberResponse> { let path = `/guilds/${guildId}/members/${userId}`; return new RequestJson<DiscordGuildMemberResponse>(path, RequestMethod.GET); }
export function addGuildMember(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: DiscordBotAddGuildMemberRequest): RequestJson<DiscordGuildMemberResponse> { let path = `/guilds/${guildId}/members/${userId}`; return new RequestJson<DiscordGuildMemberResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function deleteGuildMember(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/members/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildMember(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: { nick?: string | null, roles?: (null | DiscordSnowflakeType)[] | null, mute?: boolean | null, deaf?: boolean | null, channel_id?: (null | DiscordSnowflakeType), communication_disabled_until?: string | null, flags?: number | null }): RequestJson<DiscordGuildMemberResponse> { let path = `/guilds/${guildId}/members/${userId}`; return new RequestJson<DiscordGuildMemberResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function addGuildMemberRole(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, roleId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/members/${userId}/roles/${roleId}`; return new RequestJson<void>(path, RequestMethod.PUT); }
export function deleteGuildMemberRole(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, roleId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/members/${userId}/roles/${roleId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function getGuildNewMemberWelcome(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildHomeSettingsResponse> { let path = `/guilds/${guildId}/new-member-welcome`; return new RequestJson<DiscordGuildHomeSettingsResponse>(path, RequestMethod.GET); }
export function getGuildsOnboarding(guildId: DiscordSnowflakeType): RequestJson<DiscordUserGuildOnboardingResponse> { let path = `/guilds/${guildId}/onboarding`; return new RequestJson<DiscordUserGuildOnboardingResponse>(path, RequestMethod.GET); }
export function putGuildsOnboarding(guildId: DiscordSnowflakeType, body: DiscordUpdateGuildOnboardingRequest): RequestJson<DiscordGuildOnboardingResponse> { let path = `/guilds/${guildId}/onboarding`; return new RequestJson<DiscordGuildOnboardingResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function getGuildPreview(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildPreviewResponse> { let path = `/guilds/${guildId}/preview`; return new RequestJson<DiscordGuildPreviewResponse>(path, RequestMethod.GET); }
export function previewPruneGuild(guildId: DiscordSnowflakeType, query?: {
    days?: number;
    include_roles?: (string | (null | DiscordSnowflakeType)[]);
}): RequestJson<DiscordGuildPruneResponse> {
    let path = `/guilds/${guildId}/prune`; if (query)
        path += setQuery(query); return new RequestJson<DiscordGuildPruneResponse>(path, RequestMethod.GET);
}
export function pruneGuild(guildId: DiscordSnowflakeType, body: DiscordPruneGuildRequest): RequestJson<DiscordGuildPruneResponse> { let path = `/guilds/${guildId}/prune`; return new RequestJson<DiscordGuildPruneResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listGuildVoiceRegions(guildId: DiscordSnowflakeType): RequestJson<DiscordVoiceRegionResponse[] | null> { let path = `/guilds/${guildId}/regions`; return new RequestJson<DiscordVoiceRegionResponse[] | null>(path, RequestMethod.GET); }
export function listGuildRoles(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildRoleResponse[]> { let path = `/guilds/${guildId}/roles`; return new RequestJson<DiscordGuildRoleResponse[]>(path, RequestMethod.GET); }
export function createGuildRole(guildId: DiscordSnowflakeType, body: DiscordCreateRoleRequest): RequestJson<DiscordGuildRoleResponse> { let path = `/guilds/${guildId}/roles`; return new RequestJson<DiscordGuildRoleResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function bulkUpdateGuildRoles(guildId: DiscordSnowflakeType, body: DiscordUpdateRolePositionsRequest[]): RequestJson<DiscordGuildRoleResponse[]> { let path = `/guilds/${guildId}/roles`; return new RequestJson<DiscordGuildRoleResponse[]>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getGuildRole(guildId: DiscordSnowflakeType, roleId: DiscordSnowflakeType): RequestJson<DiscordGuildRoleResponse> { let path = `/guilds/${guildId}/roles/${roleId}`; return new RequestJson<DiscordGuildRoleResponse>(path, RequestMethod.GET); }
export function deleteGuildRole(guildId: DiscordSnowflakeType, roleId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/roles/${roleId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildRole(guildId: DiscordSnowflakeType, roleId: DiscordSnowflakeType, body: DiscordUpdateRoleRequestPartial): RequestJson<DiscordGuildRoleResponse> { let path = `/guilds/${guildId}/roles/${roleId}`; return new RequestJson<DiscordGuildRoleResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildScheduledEvents(guildId: DiscordSnowflakeType, query?: {
    with_user_count?: boolean;
}): RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)[] | null> {
    let path = `/guilds/${guildId}/scheduled-events`; if (query)
        path += setQuery(query); return new RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)[] | null>(path, RequestMethod.GET);
}
export function createGuildScheduledEvent(guildId: DiscordSnowflakeType, body: (DiscordExternalScheduledEventCreateRequest | DiscordStageScheduledEventCreateRequest | DiscordVoiceScheduledEventCreateRequest)): RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)> { let path = `/guilds/${guildId}/scheduled-events`; return new RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getGuildScheduledEvent(guildId: DiscordSnowflakeType, guildScheduledEventId: DiscordSnowflakeType, query?: {
    with_user_count?: boolean;
}): RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)> {
    let path = `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`; if (query)
        path += setQuery(query); return new RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)>(path, RequestMethod.GET);
}
export function deleteGuildScheduledEvent(guildId: DiscordSnowflakeType, guildScheduledEventId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildScheduledEvent(guildId: DiscordSnowflakeType, guildScheduledEventId: DiscordSnowflakeType, body: (DiscordExternalScheduledEventPatchRequestPartial | DiscordStageScheduledEventPatchRequestPartial | DiscordVoiceScheduledEventPatchRequestPartial)): RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)> { let path = `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`; return new RequestJson<(DiscordExternalScheduledEventResponse | DiscordStageScheduledEventResponse | DiscordVoiceScheduledEventResponse)>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildScheduledEventUsers(guildId: DiscordSnowflakeType, guildScheduledEventId: DiscordSnowflakeType, query?: {
    with_member?: boolean;
    limit?: number;
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
}): RequestJson<DiscordScheduledEventUserResponse[] | null> {
    let path = `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`; if (query)
        path += setQuery(query); return new RequestJson<DiscordScheduledEventUserResponse[] | null>(path, RequestMethod.GET);
}
export function listGuildSoundboardSounds(guildId: DiscordSnowflakeType): RequestJson<DiscordListGuildSoundboardSoundsResponse> { let path = `/guilds/${guildId}/soundboard-sounds`; return new RequestJson<DiscordListGuildSoundboardSoundsResponse>(path, RequestMethod.GET); }
export function createGuildSoundboardSound(guildId: DiscordSnowflakeType, body: DiscordSoundboardCreateRequest): RequestJson<DiscordSoundboardSoundResponse> { let path = `/guilds/${guildId}/soundboard-sounds`; return new RequestJson<DiscordSoundboardSoundResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getGuildSoundboardSound(guildId: DiscordSnowflakeType, soundId: DiscordSnowflakeType): RequestJson<DiscordSoundboardSoundResponse> { let path = `/guilds/${guildId}/soundboard-sounds/${soundId}`; return new RequestJson<DiscordSoundboardSoundResponse>(path, RequestMethod.GET); }
export function deleteGuildSoundboardSound(guildId: DiscordSnowflakeType, soundId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/soundboard-sounds/${soundId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildSoundboardSound(guildId: DiscordSnowflakeType, soundId: DiscordSnowflakeType, body: DiscordSoundboardPatchRequestPartial): RequestJson<DiscordSoundboardSoundResponse> { let path = `/guilds/${guildId}/soundboard-sounds/${soundId}`; return new RequestJson<DiscordSoundboardSoundResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildStickers(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildStickerResponse[]> { let path = `/guilds/${guildId}/stickers`; return new RequestJson<DiscordGuildStickerResponse[]>(path, RequestMethod.GET); }
export function createGuildSticker(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildStickerResponse> { let path = `/guilds/${guildId}/stickers`; return new RequestJson<DiscordGuildStickerResponse>(path, RequestMethod.POST); }
export function getGuildSticker(guildId: DiscordSnowflakeType, stickerId: DiscordSnowflakeType): RequestJson<DiscordGuildStickerResponse> { let path = `/guilds/${guildId}/stickers/${stickerId}`; return new RequestJson<DiscordGuildStickerResponse>(path, RequestMethod.GET); }
export function deleteGuildSticker(guildId: DiscordSnowflakeType, stickerId: DiscordSnowflakeType): RequestJson<void> { let path = `/guilds/${guildId}/stickers/${stickerId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateGuildSticker(guildId: DiscordSnowflakeType, stickerId: DiscordSnowflakeType, body: { name?: string, tags?: string, description?: string | null }): RequestJson<DiscordGuildStickerResponse> { let path = `/guilds/${guildId}/stickers/${stickerId}`; return new RequestJson<DiscordGuildStickerResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listGuildTemplates(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildTemplateResponse[] | null> { let path = `/guilds/${guildId}/templates`; return new RequestJson<DiscordGuildTemplateResponse[] | null>(path, RequestMethod.GET); }
export function createGuildTemplate(guildId: DiscordSnowflakeType, body: { name: string, description?: string | null }): RequestJson<DiscordGuildTemplateResponse> { let path = `/guilds/${guildId}/templates`; return new RequestJson<DiscordGuildTemplateResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function syncGuildTemplate(guildId: DiscordSnowflakeType, code: string): RequestJson<DiscordGuildTemplateResponse> { let path = `/guilds/${guildId}/templates/${code}`; return new RequestJson<DiscordGuildTemplateResponse>(path, RequestMethod.PUT); }
export function deleteGuildTemplate(guildId: DiscordSnowflakeType, code: string): RequestJson<DiscordGuildTemplateResponse> { let path = `/guilds/${guildId}/templates/${code}`; return new RequestJson<DiscordGuildTemplateResponse>(path, RequestMethod.DELETE); }
export function updateGuildTemplate(guildId: DiscordSnowflakeType, code: string, body: { name?: string, description?: string | null }): RequestJson<DiscordGuildTemplateResponse> { let path = `/guilds/${guildId}/templates/${code}`; return new RequestJson<DiscordGuildTemplateResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getActiveGuildThreads(guildId: DiscordSnowflakeType): RequestJson<DiscordThreadsResponse> { let path = `/guilds/${guildId}/threads/active`; return new RequestJson<DiscordThreadsResponse>(path, RequestMethod.GET); }
export function getGuildVanityUrl(guildId: DiscordSnowflakeType): RequestJson<DiscordVanityURLResponse> { let path = `/guilds/${guildId}/vanity-url`; return new RequestJson<DiscordVanityURLResponse>(path, RequestMethod.GET); }
export function getSelfVoiceState(guildId: DiscordSnowflakeType): RequestJson<DiscordVoiceStateResponse> { let path = `/guilds/${guildId}/voice-states/@me`; return new RequestJson<DiscordVoiceStateResponse>(path, RequestMethod.GET); }
export function updateSelfVoiceState(guildId: DiscordSnowflakeType, body: DiscordUpdateSelfVoiceStateRequestPartial): RequestJson<void> { let path = `/guilds/${guildId}/voice-states/@me`; return new RequestJson<void>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getVoiceState(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<DiscordVoiceStateResponse> { let path = `/guilds/${guildId}/voice-states/${userId}`; return new RequestJson<DiscordVoiceStateResponse>(path, RequestMethod.GET); }
export function updateVoiceState(guildId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: DiscordUpdateVoiceStateRequestPartial): RequestJson<void> { let path = `/guilds/${guildId}/voice-states/${userId}`; return new RequestJson<void>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getGuildWebhooks(guildId: DiscordSnowflakeType): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)[] | null> { let path = `/guilds/${guildId}/webhooks`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)[] | null>(path, RequestMethod.GET); }
export function getGuildWelcomeScreen(guildId: DiscordSnowflakeType): RequestJson<DiscordGuildWelcomeScreenResponse> { let path = `/guilds/${guildId}/welcome-screen`; return new RequestJson<DiscordGuildWelcomeScreenResponse>(path, RequestMethod.GET); }
export function updateGuildWelcomeScreen(guildId: DiscordSnowflakeType, body: DiscordWelcomeScreenPatchRequestPartial): RequestJson<DiscordGuildWelcomeScreenResponse> { let path = `/guilds/${guildId}/welcome-screen`; return new RequestJson<DiscordGuildWelcomeScreenResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getGuildWidgetSettings(guildId: DiscordSnowflakeType): RequestJson<DiscordWidgetSettingsResponse> { let path = `/guilds/${guildId}/widget`; return new RequestJson<DiscordWidgetSettingsResponse>(path, RequestMethod.GET); }
export function updateGuildWidgetSettings(guildId: DiscordSnowflakeType, body: { channel_id?: (null | DiscordSnowflakeType), enabled?: boolean | null }): RequestJson<DiscordWidgetSettingsResponse> { let path = `/guilds/${guildId}/widget`; return new RequestJson<DiscordWidgetSettingsResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getGuildWidget(guildId: DiscordSnowflakeType): RequestJson<DiscordWidgetResponse> { let path = `/guilds/${guildId}/widget.json`; return new RequestJson<DiscordWidgetResponse>(path, RequestMethod.GET); }
export function getGuildWidgetPng(guildId: DiscordSnowflakeType, query?: {
    style?: DiscordWidgetImageStyles;
}): RequestJson<void> {
    let path = `/guilds/${guildId}/widget.png`; if (query)
        path += setQuery(query); return new RequestJson<void>(path, RequestMethod.GET);
}
export function createInteractionResponse(interactionId: DiscordSnowflakeType, interactionToken: string, body: (DiscordApplicationCommandAutocompleteCallbackRequest | DiscordCreateMessageInteractionCallbackRequest | DiscordLaunchActivityInteractionCallbackRequest | DiscordModalInteractionCallbackRequest | DiscordPongInteractionCallbackRequest | DiscordUpdateMessageInteractionCallbackRequest), query?: {
    with_response?: boolean;
}): RequestJson<DiscordInteractionCallbackResponse> {
    let path = `/interactions/${interactionId}/${interactionToken}/callback`; if (query)
        path += setQuery(query); return new RequestJson<DiscordInteractionCallbackResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json");
}
export function inviteResolve(code: string, query?: {
    with_counts?: boolean;
    guild_scheduled_event_id?: DiscordSnowflakeType;
}): RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)> {
    let path = `/invites/${code}`; if (query)
        path += setQuery(query); return new RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)>(path, RequestMethod.GET);
}
export function inviteRevoke(code: string): RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)> { let path = `/invites/${code}`; return new RequestJson<(DiscordFriendInviteResponse | DiscordGroupDMInviteResponse | DiscordGuildInviteResponse)>(path, RequestMethod.DELETE); }
export function createOrJoinLobby(body: { idle_timeout_seconds?: number | null, lobby_metadata?: object | null, member_metadata?: object | null, secret: string, flags?: (null | number) }): RequestJson<DiscordLobbyResponse> { let path = "/lobbies"; return new RequestJson<DiscordLobbyResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function createLobby(body: { idle_timeout_seconds?: number | null, members?: DiscordLobbyMemberRequest[] | null, metadata?: object | null, flags?: (null | number), override_event_webhooks_url?: string | null }): RequestJson<DiscordLobbyResponse> { let path = "/lobbies"; return new RequestJson<DiscordLobbyResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getLobby(lobbyId: DiscordSnowflakeType): RequestJson<DiscordLobbyResponse> { let path = `/lobbies/${lobbyId}`; return new RequestJson<DiscordLobbyResponse>(path, RequestMethod.GET); }
export function editLobby(lobbyId: DiscordSnowflakeType, body: { idle_timeout_seconds?: number | null, metadata?: object | null, members?: DiscordLobbyMemberRequest[] | null, flags?: (null | number), override_event_webhooks_url?: string | null }): RequestJson<DiscordLobbyResponse> { let path = `/lobbies/${lobbyId}`; return new RequestJson<DiscordLobbyResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function editLobbyChannelLink(lobbyId: DiscordSnowflakeType, body: { channel_id?: (null | DiscordSnowflakeType) }): RequestJson<DiscordLobbyResponse> { let path = `/lobbies/${lobbyId}/channel-linking`; return new RequestJson<DiscordLobbyResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function leaveLobby(lobbyId: DiscordSnowflakeType): RequestJson<void> { let path = `/lobbies/${lobbyId}/members/@me`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function createLinkedLobbyGuildInviteForSelf(lobbyId: DiscordSnowflakeType): RequestJson<DiscordLobbyGuildInviteResponse> { let path = `/lobbies/${lobbyId}/members/@me/invites`; return new RequestJson<DiscordLobbyGuildInviteResponse>(path, RequestMethod.POST); }
export function bulkUpdateLobbyMembers(lobbyId: DiscordSnowflakeType, body: DiscordBulkLobbyMemberRequest[] | null): RequestJson<DiscordLobbyMemberResponse[] | null> { let path = `/lobbies/${lobbyId}/members/bulk`; return new RequestJson<DiscordLobbyMemberResponse[] | null>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function addLobbyMember(lobbyId: DiscordSnowflakeType, userId: DiscordSnowflakeType, body: { metadata?: object | null, flags?: (null | number) }): RequestJson<DiscordLobbyMemberResponse> { let path = `/lobbies/${lobbyId}/members/${userId}`; return new RequestJson<DiscordLobbyMemberResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function deleteLobbyMember(lobbyId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<void> { let path = `/lobbies/${lobbyId}/members/${userId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function createLinkedLobbyGuildInviteForUser(lobbyId: DiscordSnowflakeType, userId: DiscordSnowflakeType): RequestJson<DiscordLobbyGuildInviteResponse> { let path = `/lobbies/${lobbyId}/members/${userId}/invites`; return new RequestJson<DiscordLobbyGuildInviteResponse>(path, RequestMethod.POST); }
export function getLobbyMessages(lobbyId: DiscordSnowflakeType, query?: {
    limit?: number;
}): RequestJson<DiscordLobbyMessageResponse[] | null> {
    let path = `/lobbies/${lobbyId}/messages`; if (query)
        path += setQuery(query); return new RequestJson<DiscordLobbyMessageResponse[] | null>(path, RequestMethod.GET);
}
export function createLobbyMessage(lobbyId: DiscordSnowflakeType, body: DiscordSDKMessageRequest): RequestJson<DiscordLobbyMessageResponse> { let path = `/lobbies/${lobbyId}/messages`; return new RequestJson<DiscordLobbyMessageResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getMyOauth2Authorization(): RequestJson<DiscordOAuth2GetAuthorizationResponse> { let path = "/oauth2/@me"; return new RequestJson<DiscordOAuth2GetAuthorizationResponse>(path, RequestMethod.GET); }
export function getMyOauth2Application(): RequestJson<DiscordPrivateApplicationResponse> { let path = "/oauth2/applications/@me"; return new RequestJson<DiscordPrivateApplicationResponse>(path, RequestMethod.GET); }
export function getPublicKeys(): RequestJson<DiscordOAuth2GetKeys> { let path = "/oauth2/keys"; return new RequestJson<DiscordOAuth2GetKeys>(path, RequestMethod.GET); }
export function getOpenidConnectUserinfo(): RequestJson<DiscordOAuth2GetOpenIDConnectUserInfoResponse> { let path = "/oauth2/userinfo"; return new RequestJson<DiscordOAuth2GetOpenIDConnectUserInfoResponse>(path, RequestMethod.GET); }
export function partnerSdkUnmergeProvisionalAccount(body: { client_id: DiscordSnowflakeType, client_secret?: string | null, external_auth_token: string, external_auth_type: DiscordApplicationIdentityProviderAuthType }): RequestJson<void> { let path = "/partner-sdk/provisional-accounts/unmerge"; return new RequestJson<void>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function botPartnerSdkUnmergeProvisionalAccount(body: { external_user_id: string }): RequestJson<void> { let path = "/partner-sdk/provisional-accounts/unmerge/bot"; return new RequestJson<void>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function partnerSdkToken(body: { client_id: DiscordSnowflakeType, client_secret?: string | null, external_auth_token: string, external_auth_type: DiscordApplicationIdentityProviderAuthType }): RequestJson<DiscordProvisionalTokenResponse> { let path = "/partner-sdk/token"; return new RequestJson<DiscordProvisionalTokenResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function botPartnerSdkToken(body: { external_user_id: string, preferred_global_name?: string | null }): RequestJson<DiscordProvisionalTokenResponse> { let path = "/partner-sdk/token/bot"; return new RequestJson<DiscordProvisionalTokenResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getSoundboardDefaultSounds(): RequestJson<DiscordSoundboardSoundResponse[]> { let path = "/soundboard-default-sounds"; return new RequestJson<DiscordSoundboardSoundResponse[]>(path, RequestMethod.GET); }
export function createStageInstance(body: { topic: string, channel_id: DiscordSnowflakeType, privacy_level?: (null | DiscordStageInstancesPrivacyLevels), guild_scheduled_event_id?: (null | DiscordSnowflakeType), send_start_notification?: boolean | null }): RequestJson<DiscordStageInstanceResponse> { let path = "/stage-instances"; return new RequestJson<DiscordStageInstanceResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function getStageInstance(channelId: DiscordSnowflakeType): RequestJson<DiscordStageInstanceResponse> { let path = `/stage-instances/${channelId}`; return new RequestJson<DiscordStageInstanceResponse>(path, RequestMethod.GET); }
export function deleteStageInstance(channelId: DiscordSnowflakeType): RequestJson<void> { let path = `/stage-instances/${channelId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateStageInstance(channelId: DiscordSnowflakeType, body: { topic?: string, privacy_level?: DiscordStageInstancesPrivacyLevels }): RequestJson<DiscordStageInstanceResponse> { let path = `/stage-instances/${channelId}`; return new RequestJson<DiscordStageInstanceResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function listStickerPacks(): RequestJson<DiscordStickerPackCollectionResponse> { let path = "/sticker-packs"; return new RequestJson<DiscordStickerPackCollectionResponse>(path, RequestMethod.GET); }
export function getStickerPack(packId: DiscordSnowflakeType): RequestJson<DiscordStickerPackResponse> { let path = `/sticker-packs/${packId}`; return new RequestJson<DiscordStickerPackResponse>(path, RequestMethod.GET); }
export function getSticker(stickerId: DiscordSnowflakeType): RequestJson<(DiscordGuildStickerResponse | DiscordStandardStickerResponse)> { let path = `/stickers/${stickerId}`; return new RequestJson<(DiscordGuildStickerResponse | DiscordStandardStickerResponse)>(path, RequestMethod.GET); }
export function getMyUser(): RequestJson<DiscordUserPIIResponse> { let path = "/users/@me"; return new RequestJson<DiscordUserPIIResponse>(path, RequestMethod.GET); }
export function updateMyUser(body: DiscordBotAccountPatchRequest): RequestJson<DiscordUserPIIResponse> { let path = "/users/@me"; return new RequestJson<DiscordUserPIIResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getCurrentUserApplicationEntitlements(applicationId: DiscordSnowflakeType, query?: {
    sku_ids?: (string | (null | DiscordSnowflakeType)[]);
    exclude_consumed?: boolean;
}): RequestJson<(null | DiscordEntitlementResponse)[]> {
    let path = `/users/@me/applications/${applicationId}/entitlements`; if (query)
        path += setQuery(query); return new RequestJson<(null | DiscordEntitlementResponse)[]>(path, RequestMethod.GET);
}
export function getApplicationUserRoleConnection(applicationId: DiscordSnowflakeType): RequestJson<DiscordApplicationUserRoleConnectionResponse> { let path = `/users/@me/applications/${applicationId}/role-connection`; return new RequestJson<DiscordApplicationUserRoleConnectionResponse>(path, RequestMethod.GET); }
export function updateApplicationUserRoleConnection(applicationId: DiscordSnowflakeType, body: DiscordUpdateApplicationUserRoleConnectionRequest): RequestJson<DiscordApplicationUserRoleConnectionResponse> { let path = `/users/@me/applications/${applicationId}/role-connection`; return new RequestJson<DiscordApplicationUserRoleConnectionResponse>(path, RequestMethod.PUT).setBody(stringify(body), "application/json"); }
export function deleteApplicationUserRoleConnection(applicationId: DiscordSnowflakeType): RequestJson<void> { let path = `/users/@me/applications/${applicationId}/role-connection`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function createDm(body: DiscordCreatePrivateChannelRequest): RequestJson<(DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse)> { let path = "/users/@me/channels"; return new RequestJson<(DiscordPrivateChannelResponse | DiscordPrivateGroupChannelResponse)>(path, RequestMethod.POST).setBody(stringify(body), "application/json"); }
export function listMyConnections(): RequestJson<DiscordConnectedAccountResponse[] | null> { let path = "/users/@me/connections"; return new RequestJson<DiscordConnectedAccountResponse[] | null>(path, RequestMethod.GET); }
export function listMyGuilds(query?: {
    before?: DiscordSnowflakeType;
    after?: DiscordSnowflakeType;
    limit?: number;
    with_counts?: boolean;
}): RequestJson<DiscordMyGuildResponse[] | null> {
    let path = "/users/@me/guilds"; if (query)
        path += setQuery(query); return new RequestJson<DiscordMyGuildResponse[] | null>(path, RequestMethod.GET);
}
export function leaveGuild(guildId: DiscordSnowflakeType): RequestJson<void> { let path = `/users/@me/guilds/${guildId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function getMyGuildMember(guildId: DiscordSnowflakeType): RequestJson<DiscordPrivateGuildMemberResponse> { let path = `/users/@me/guilds/${guildId}/member`; return new RequestJson<DiscordPrivateGuildMemberResponse>(path, RequestMethod.GET); }
export function getUser(userId: DiscordSnowflakeType): RequestJson<DiscordUserResponse> { let path = `/users/${userId}`; return new RequestJson<DiscordUserResponse>(path, RequestMethod.GET); }
export function listVoiceRegions(): RequestJson<DiscordVoiceRegionResponse[] | null> { let path = "/voice/regions"; return new RequestJson<DiscordVoiceRegionResponse[] | null>(path, RequestMethod.GET); }
export function getWebhook(webhookId: DiscordSnowflakeType): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)> { let path = `/webhooks/${webhookId}`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)>(path, RequestMethod.GET); }
export function deleteWebhook(webhookId: DiscordSnowflakeType): RequestJson<void> { let path = `/webhooks/${webhookId}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateWebhook(webhookId: DiscordSnowflakeType, body: { name?: string, avatar?: string | null, channel_id?: (null | DiscordSnowflakeType) }): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)> { let path = `/webhooks/${webhookId}`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function getWebhookByToken(webhookId: DiscordSnowflakeType, webhookToken: string): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)> { let path = `/webhooks/${webhookId}/${webhookToken}`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)>(path, RequestMethod.GET); }
export function executeWebhook(webhookId: DiscordSnowflakeType, webhookToken: string, body: (DiscordIncomingWebhookRequestPartial | DiscordIncomingWebhookUpdateRequestPartial), query?: {
    wait?: boolean;
    thread_id?: DiscordSnowflakeType;
    with_components?: boolean;
}): RequestJson<DiscordMessageResponse> {
    let path = `/webhooks/${webhookId}/${webhookToken}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse>(path, RequestMethod.POST).setBody(stringify(body), "application/json");
}
export function deleteWebhookByToken(webhookId: DiscordSnowflakeType, webhookToken: string): RequestJson<void> { let path = `/webhooks/${webhookId}/${webhookToken}`; return new RequestJson<void>(path, RequestMethod.DELETE); }
export function updateWebhookByToken(webhookId: DiscordSnowflakeType, webhookToken: string, body: { name?: string, avatar?: string | null }): RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)> { let path = `/webhooks/${webhookId}/${webhookToken}`; return new RequestJson<(DiscordApplicationIncomingWebhookResponse | DiscordChannelFollowerWebhookResponse | DiscordGuildIncomingWebhookResponse)>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json"); }
export function executeGithubCompatibleWebhook(webhookId: DiscordSnowflakeType, webhookToken: string, body: DiscordGithubWebhook, query?: {
    wait?: boolean;
    thread_id?: DiscordSnowflakeType;
}): RequestJson<void> {
    let path = `/webhooks/${webhookId}/${webhookToken}/github`; if (query)
        path += setQuery(query); return new RequestJson<void>(path, RequestMethod.POST).setBody(stringify(body), "application/json");
}
export function getOriginalWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, query?: {
    thread_id?: DiscordSnowflakeType;
}): RequestJson<DiscordMessageResponse> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/@original`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse>(path, RequestMethod.GET);
}
export function deleteOriginalWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, query?: {
    thread_id?: DiscordSnowflakeType;
}): RequestJson<void> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/@original`; if (query)
        path += setQuery(query); return new RequestJson<void>(path, RequestMethod.DELETE);
}
export function updateOriginalWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, body: DiscordIncomingWebhookUpdateRequestPartial, query?: {
    thread_id?: DiscordSnowflakeType;
    with_components?: boolean;
}): RequestJson<DiscordMessageResponse> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/@original`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json");
}
export function getWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, messageId: DiscordSnowflakeType, query?: {
    thread_id?: DiscordSnowflakeType;
}): RequestJson<DiscordMessageResponse> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse>(path, RequestMethod.GET);
}
export function deleteWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, messageId: DiscordSnowflakeType, query?: {
    thread_id?: DiscordSnowflakeType;
}): RequestJson<void> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`; if (query)
        path += setQuery(query); return new RequestJson<void>(path, RequestMethod.DELETE);
}
export function updateWebhookMessage(webhookId: DiscordSnowflakeType, webhookToken: string, messageId: DiscordSnowflakeType, body: DiscordIncomingWebhookUpdateRequestPartial, query?: {
    thread_id?: DiscordSnowflakeType;
    with_components?: boolean;
}): RequestJson<DiscordMessageResponse> {
    let path = `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`; if (query)
        path += setQuery(query); return new RequestJson<DiscordMessageResponse>(path, RequestMethod.PATCH).setBody(stringify(body), "application/json");
}
export function executeSlackCompatibleWebhook(webhookId: DiscordSnowflakeType, webhookToken: string, body: DiscordSlackWebhook, query?: {
    wait?: boolean;
    thread_id?: DiscordSnowflakeType;
}): RequestJson<string | null> {
    let path = `/webhooks/${webhookId}/${webhookToken}/slack`; if (query)
        path += setQuery(query); return new RequestJson<string | null>(path, RequestMethod.POST).setBody(stringify(body), "application/json");
}

function setQuery(query: object): string {
    const queries = Object.entries(query).filter(e => e[1] !== undefined).map(([n, v]) => n + "=" + v);
    if (queries.length) return "?" + queries.join("$");
    return "";
}