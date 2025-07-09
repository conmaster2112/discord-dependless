import { WSS_GATEWAY_ENDPOINT } from "../constants";
import { DiscordGatewayOpCode } from "../enums";
import type { DiscordMessageResponse, DiscordGatewayEventNames, DiscordGatewayPayload } from "../rest-api-types";
import { GateWayInteractionCreateEvent, GatewayReadyEvent } from "./gateway.events";
//import { writeFile } from "node:fs/promises";

const ERROR_EVENT_NAME: "error" = "error" as const;
const ErrorEvent: new (eventName: string, eventInit: EventInit & {error: Error | DOMException})=>Event = globalThis.ErrorEvent??class ErrorEvent extends Event {
    public readonly error: Error | DOMException;
    public constructor(eventName: string, eventInit: EventInit & {error: Error | DOMException}){
        super(eventName, eventInit);
        this.error = eventInit.error;
    }
};

// eslint-disable-next-line no-unsafe-declaration-merging
export class GateWay extends EventTarget {
    public static readonly WebSocketConstructor?: new (link: string)=> WebSocket = globalThis.WebSocket;
    public socket?: WebSocket;
    public heartbeat?: ReturnType<typeof setInterval>;
    protected currentHeartbeatEventSequenceId: number | null = null;
    public connect(token: string, intentBits: number): this{
        if(!GateWay.WebSocketConstructor)
            throw new ReferenceError("Web Socket APIs are not available");

        // Initialize websocket
        const socket = this.socket = new GateWay.WebSocketConstructor(WSS_GATEWAY_ENDPOINT);
        socket.addEventListener("open", ()=>this.onOpen(token, intentBits));
        socket.addEventListener("error", error=>this.report(error as unknown as Error));
        socket.addEventListener("message", (event)=>this.onPayload(JSON.parse(event.data)));
        socket.addEventListener("close",()=>this.disconnect());
        return this;
    }
    protected report(error: Error): void{
        this.dispatchEvent(new ErrorEvent(ERROR_EVENT_NAME, {error: error as Error}));
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
        const {op, s} = data;
        if(typeof s === "number")
            this.currentHeartbeatEventSequenceId = s;
        if(typeof this[op as 0] !== "function") 
            return void this.report(new TypeError("Unknown op code: " + op));

        this[op as 10](data).catch(e=>this.report(e));
    }
    protected async [0 /*DiscordGatewayOpCode.Dispatch*/](data: DiscordGatewayPayload): Promise<void>{
        if(!data.t)
            return void this.report(new TypeError("Dispatch with no event name."));

        //await writeFile(`./EVENTS/${data.t}.json`, JSON.stringify(data, null, 3));
        
        this.dispatchEvent(new MessageEvent(data.t!, {data: data.d}));
    }
    protected async [11/*DiscordGatewayOpCode.HeartbeatAck*/](_: DiscordGatewayPayload): Promise<void>{}
    protected async [10/*DiscordGatewayOpCode.Hello*/](data: DiscordGatewayPayload): Promise<void>{
        // clear old heart beat
        if(this.heartbeat) this.heartbeat = void clearInterval(this.heartbeat);

        const heartbeat_interval = (data.d as any)?.heartbeat_interval;

        if(typeof heartbeat_interval !== "number") 
            throw TypeError("Invalid payload received for Hello op code");

        this.heartbeat = setInterval(()=>void this.answer(DiscordGatewayOpCode.Heartbeat, this.currentHeartbeatEventSequenceId), heartbeat_interval);
        this.heartbeat.unref?.();
    }

    public disconnect(): void{
        // clear and cancel the heart beat interval
        if(this.heartbeat) this.heartbeat = void clearInterval(this.heartbeat);
        
        // close websocket
        if(this.socket) this.socket.close();
    }
    protected async answer(opcode: DiscordGatewayOpCode, data: any): Promise<void> {
        return void this.socket?.send(JSON.stringify({op: opcode, d: data}));
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
    READY: MessageEvent<GatewayReadyEvent>;
    INTERACTION_CREATE: MessageEvent<GateWayInteractionCreateEvent>;
    error: ErrorEvent; 
} & {
    [K in DiscordGatewayEventNames]: MessageEvent<unknown>;
}