import { ResponseLike } from "./api-like";
import { DiscordError } from "./rest-api-types";

export class DiscordAPIError extends Error {
    public readonly path: string;
    public readonly method: string;
    public readonly response: ResponseLike;
    public readonly errorsDetails: ReportDetail[];
    public readonly reportMessages: string[];

    private constructor(errors: ReportDetail[], response: ResponseLike, path: string, method: string) {
        super(response.statusText);
        this.path = path;
        this.method = method;
        this.response = response;
        this.reportMessages = errors.map(e=>`[${e.detail.code}] [${e.path}] -> ${e.detail.message}`)
        this.errorsDetails = errors;
    }

    public static async from(response: ResponseLike, path: string, method: string): Promise<DiscordAPIError | Error> {
        if (String(response.status).match(/40\d/)) {
            const error = await response.json<DiscordError>().catch(_ => null);
            if (error === null) return new Error(response.statusText);
            return new DiscordAPIError(Array.from<ReportDetail>(this.getReportsPaths((error as any).errors??{})), response, path, method);
        }
        return new Error(response.statusText);
    }

    public static * getReportsPaths(obj: any): Generator<ReportDetail> {
        for (const key of Object.getOwnPropertyNames(obj)) {
            const object = obj[key];
            if (typeof object !== 'object') continue;
            if ("_errors" in object && Array.isArray(object['_errors']))
                for (const error of object._errors)
                    yield { path: key, detail: error };
            else
                for (const { path, detail } of this.getReportsPaths(object))
                    yield { path: `${key}.${path}`, detail };
        }
    }

    public static * formatErrors(errors: any): Generator<string> {
        for (const { detail, path } of this.getReportsPaths(errors))
            yield `[${detail.code}] [${path}] -> ${detail.message}`;
    }
}
type ErrorDetail = {
    code: string;
    message: string;
}
type ReportDetail = {
    path: string;
    detail: ErrorDetail;
}