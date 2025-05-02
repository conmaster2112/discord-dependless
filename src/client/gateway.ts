import { WSS_GATEWAY_ENDPOINT } from "../constants";
import { DiscordGatewayOpCode } from "../enums";
import type { DiscordMessageResponse, DiscordSnowflakeType, DiscordUserResponse, DiscordGatewayEventNames, DiscordGatewayPayload } from "../rest-api-types";
//import { writeFile } from "node:fs/promises";

const ERROR_EVENT_NAME: "error" = "error" as const;

// eslint-disable-next-line no-unsafe-declaration-merging
export class GateWay extends EventTarget {
    public static readonly WebSocketConstructor?: new (link: string)=> WebSocket = globalThis.WebSocket;
    public socket?: WebSocket;
    public heartbeat?: ReturnType<typeof setInterval>;
    public connect(token: string, intentBits: number): this{
        if(!GateWay.WebSocketConstructor)
            throw new ReferenceError("Web Socket APIs are not available");

        // Initialize websocket
        const socket = this.socket = new GateWay.WebSocketConstructor(WSS_GATEWAY_ENDPOINT);
        socket.addEventListener("open", ()=>this.onOpen(token, intentBits));
        socket.addEventListener("error", error=>this.report(error));
        socket.addEventListener("message", (event)=>this.onPayload(JSON.parse(event.data)));
        socket.addEventListener("close",()=>this.disconnect());
        return this;
    }
    protected report(error: unknown): void{
        this.dispatchEvent(new ErrorEvent(ERROR_EVENT_NAME, {error}));
    }
    protected async onOpen(token: string, intentBits: number): Promise<void>{
        await this.answer(DiscordGatewayOpCode.Identify, {
            token,
            intents: intentBits,
            properties: {
                os: String(globalThis?.process?.platform??"linux"),
                browser: String(globalThis?.process?.release?.name??"node"),
                device: String(globalThis?.process?.release?.name??"node")
            }
        }).catch(e=>this.report(e));
    }
    protected onPayload(data: DiscordGatewayPayload): void{
        const {op} = data;
        if(typeof this[op] !== "function") 
            return void this.report(new TypeError("Unknown op code: " + op));

        this[op as 10](data).catch(e=>this.report(e));
    }
    protected async [DiscordGatewayOpCode.Dispatch](data: DiscordGatewayPayload): Promise<void>{
        if(!data.t)
            return void this.report(new TypeError("Dispatch with no event name."));

        //await writeFile(`./EVENTS/${data.t}.json`, JSON.stringify(data, null, 3));
        
        this.dispatchEvent(new MessageEvent(data.t!, {data: data.d}));
    }
    protected async [DiscordGatewayOpCode.Hello](data: DiscordGatewayPayload): Promise<void>{
        // clear old heart beat
        if(this.heartbeat) this.heartbeat = void clearInterval(this.heartbeat);

        const heartbeat_interval = (data.d as any)?.heartbeat_interval;

        if(typeof heartbeat_interval !== "number") 
            throw TypeError("Invalid payload received for Hello op code");

        this.heartbeat = setInterval(()=>{}, heartbeat_interval);
        this.heartbeat.unref?.();
    }

    public disconnect(): void{
        // clear and cancel the heart beat interval
        if(this.heartbeat) this.heartbeat = void clearInterval(this.heartbeat);
        
        // close websocket
        if(this.socket) this.socket.close();
    }
    protected async answer(opcode: DiscordGatewayOpCode, data: any): Promise<void> {
        this.socket?.send(JSON.stringify({op: opcode, d: data}));
    }
}
export interface GateWay {
    addEventListener<K extends keyof GatewayEventMap>(type: K, listener: (this: GateWay, ev: GatewayEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof GatewayEventMap>(type: K, listener: (this: GateWay, ev: GatewayEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type GatewayEventMap = {
    MESSAGE_CREATE: MessageEvent<DiscordMessageResponse>;
    error: ErrorEvent; 
} & {
    [K in DiscordGatewayEventNames]: MessageEvent<unknown>;
}

export interface GateWayBotReady {
    "v": number,
    "user_settings": object,
    "user": DiscordUserResponse
    "session_type": string,
    "session_id": string,
    "resume_gateway_url": string,
    "relationships": unknown[],
    "private_channels": unknown[],
    "presences": unknown[],
    "guilds": {unavailable: boolean, id: DiscordSnowflakeType}[],
    "guild_join_requests": unknown[],
    "geo_ordered_rtc_regions": string[],
    "game_relationships": unknown[],
    "auth": object,
    "application": {
       "id": DiscordSnowflakeType,
       "flags": number
    }
}