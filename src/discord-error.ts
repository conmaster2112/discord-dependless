export class DiscordAPIError extends Error {
    public readonly path: string;
    public readonly method: string;
    public constructor(path: string, method: string, response: Response){
        super(response.statusText);
        this.path = path;
        this.method = method;
    }
}