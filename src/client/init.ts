import { InitRequestLike } from "../api-like";
import { HeaderType, RequestMethod } from "../enums";

export class RequestInitInfo implements InitRequestLike{
    public headers: Record<string, string | number>;
    public body?: unknown;
    public constructor(
        public readonly method: RequestMethod = RequestMethod.GET
    ){
        this.headers = {};
    }
    public setBody(data: any, contentType?: string): this{
        this.body = data;

        // Check optional param
        if(contentType)
            this.headers[HeaderType.ContentType] = contentType;
    
        return this;
    }
}