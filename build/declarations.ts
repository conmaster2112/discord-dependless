export function * declarationTypes(data: any): Generator<string>{
    if (!data.paths)
        throw ReferenceError("No paths included in openapi file: " + Object.keys(data).join(", "));

    if (!data.components)
        throw ReferenceError("No components included in openapi file: " + Object.keys(data).join(", "));

    if (!data.components.schemas)
        throw ReferenceError("No schemas included in components: " + Object.keys(data.components).join(", "));

    
    yield * writeEndPoints(data.paths);
    yield * writeSchemas(data.components.schemas);


    const gateway_event_names = `HELLO
    READY
    RESUMED
    RECONNECT
    INVALID_SESSION
    APPLICATION_COMMAND_PERMISSIONS_UPDATE
    AUTO_MODERATION_RULE_CREATE
    AUTO_MODERATION_RULE_UPDATE
    AUTO_MODERATION_RULE_DELETE
    AUTO_MODERATION_ACTION_EXECUTION
    CHANNEL_CREATE
    CHANNEL_UPDATE
    CHANNEL_DELETE
    CHANNEL_PINS_UPDATE
    THREAD_CREATE
    THREAD_UPDATE
    THREAD_DELETE
    THREAD_LIST_SYNC
    THREAD_MEMBER_UPDATE
    THREAD_MEMBERS_UPDATE
    ENTITLEMENT_CREATE
    ENTITLEMENT_UPDATE
    ENTITLEMENT_DELETE
    GUILD_CREATE
    GUILD_UPDATE
    GUILD_DELETE
    GUILD_AUDIT_LOG_ENTRY_CREATE
    GUILD_BAN_ADD
    GUILD_BAN_REMOVE
    GUILD_EMOJIS_UPDATE
    GUILD_STICKERS_UPDATE
    GUILD_INTEGRATIONS_UPDATE
    GUILD_MEMBER_ADD
    GUILD_MEMBER_REMOVE
    GUILD_MEMBER_UPDATE
    GUILD_MEMBERS_CHUNK
    GUILD_ROLE_CREATE
    GUILD_ROLE_UPDATE
    GUILD_ROLE_DELETE
    GUILD_SCHEDULED_EVENT_CREATE
    GUILD_SCHEDULED_EVENT_UPDATE
    GUILD_SCHEDULED_EVENT_DELETE
    GUILD_SCHEDULED_EVENT_USER_ADD
    GUILD_SCHEDULED_EVENT_USER_REMOVE
    GUILD_SOUNDBOARD_SOUND_CREATE
    GUILD_SOUNDBOARD_SOUND_UPDATE
    GUILD_SOUNDBOARD_SOUND_DELETE
    GUILD_SOUNDBOARD_SOUNDS_UPDATE
    SOUNDBOARD_SOUNDS
    INTEGRATION_CREATE
    INTEGRATION_UPDATE
    INTEGRATION_DELETE
    INTERACTION_CREATE
    INVITE_CREATE
    INVITE_DELETE
    MESSAGE_CREATE
    MESSAGE_UPDATE
    MESSAGE_DELETE
    MESSAGE_DELETE_BULK
    MESSAGE_REACTION_ADD
    MESSAGE_REACTION_REMOVE
    MESSAGE_REACTION_REMOVE_ALL
    MESSAGE_REACTION_REMOVE_EMOJI
    PRESENCE_UPDATE
    STAGE_INSTANCE_CREATE
    STAGE_INSTANCE_UPDATE
    STAGE_INSTANCE_DELETE
    SUBSCRIPTION_CREATE
    SUBSCRIPTION_UPDATE
    SUBSCRIPTION_DELETE
    TYPING_START
    USER_UPDATE
    VOICE_CHANNEL_EFFECT_SEND
    VOICE_STATE_UPDATE
    VOICE_SERVER_UPDATE
    WEBHOOKS_UPDATE
    MESSAGE_POLL_VOTE_ADD
    MESSAGE_POLL_VOTE_REMOVE`.split("\n").map(e => `'${e}'`).join(" | ");
    yield `export type ${getName("GatewayEventNames")} = ${gateway_event_names};\n`;
    yield `
export interface ${getName("GatewayPayload")} {
  "op": number;
  "d": unknown;
  "s": number | null;
  "t": string | null;
}
`;
}
const TYPE_MAPPER = {
    integer: "number",
    float: "number"
}
function* writeEndPoints(paths: any): Generator<string> {
    yield "export type DiscordRestAPIPath = ";
    const _ = new Set();
    for (let key of Reflect.ownKeys(paths)) {
        if (typeof key !== "string") continue;

        const parameters = paths[key].parameters ? paths[key].parameters.filter((e: any) => e.in === "path") : [];

        for (const param of parameters) {
            let type = getTypeFromType(param.schema);
            key = key.replace(param.name, type);
        }

        key = key.replaceAll("{", "${");

        if (_.has(key)) continue;

        if (_.size) yield " |\n";

        _.add(key);
        yield `\`${key}\``;
    }

    yield ";\n\n";
}
function* writeSchemas(schemas: any): Generator<string> {
    for (const key of Reflect.ownKeys(schemas)) {
        if (typeof key !== "string") continue;

        const name = getName(key);
        if (key === "SnowflakeType") {
            yield `export type ${name} = ${"`${number}`"}; //Type overwrite more precise\n`
            continue;
        }
        yield `export type ${name} = ${getTypeFromType(schemas[key])};  //${schemas[key].type}\n`
    }
}
export function getTypeFromType(data: any): string {
    if ("const" in data) {
        return JSON.stringify(data.const);
    }
    if (data.$ref) return getName(data.$ref?.match(/[^/ ]+$/) ?? "never");

    if (data.type === "null") return "null";

    if (Array.isArray(data.type)) {
        let _ = data.type;
        let types: string[] = [];
        for (const type of data.type) {
            data.type = type;
            types.push(getTypeFromType(data));
        }
        data.type = _;
        return types.join(" | ");
    }

    if (Array.isArray(data.oneOf) && data.oneOf.length) return `(${data.oneOf.map(getTypeFromType).join(" | ")})`;
    if (Array.isArray(data.anyOf) && data.anyOf.length) return `(${data.anyOf.map(getTypeFromType).join(" | ")})`;
    if (Array.isArray(data.allOf) && data.allOf.length) return `(${data.allOf.map(getTypeFromType).join(" & ")})`;

    if (data.type === "array") return `${getTypeFromType(data.items)}[]`;
    if (data.type === "object" && data.properties) {
        const keys = Object.getOwnPropertyNames(data.properties);
        if (!keys.length) return "object";
        const props: string[] = [];
        const required = data.required ?? [];
        for (const key of keys) {
            const isRequired = required.includes(key);
            props.push(`${key}${isRequired ? "" : "?"}: ${getTypeFromType(data.properties[key])}`);
        }
        return `{${props.join(", ")}}`
    }

    if (!data.type) {
        globalThis.console.warn("Unknown type: " + JSON.stringify(data));
        return "unknown";
    }
    return getType(data)!;
}
function getType(e: any): string | undefined {
    return TYPE_MAPPER[e.type] ?? e.type;
}
export function getName(e: string): string {
    return `Discord${e}`;
}