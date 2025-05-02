
export abstract class Result<T, E extends Error = Error> {
    public constructor(isError: boolean){
        this.hasError = isError;
    }
    public abstract readonly data: T | null;
    public abstract readonly error: E | null;
    protected readonly hasError: boolean;
    public isError(): this is ErrorResult<E>{
        return this instanceof ErrorResult;
    }
    public isValid(): this is ValidResult<T>{
        return this instanceof ValidResult;
    }
    public static valid<T>(value: T): ValidResult<T>{
        return new ValidResult(value);
    }
    public static error<T>(error: T): ErrorResult<T extends Error?T:Error>{
        let errorValue: any = error;
        
        // Reassign to be sure its error instance
        if(!(error instanceof Error)){
            errorValue = new Error(String(error));
            Object.assign(errorValue, error);
        }
        
        return new ErrorResult<T extends Error?T:Error>(errorValue);
    }
    public static async wrap<T>(thenable: PromiseLike<T>): Promise<Result<T, Error>>{
        return thenable.then(Result.valid, Result.error) as Promise<Result<T, Error>>;
    }
    public static async unwrap<T>(thenable: PromiseLike<Result<T>>): Promise<T>{
        return thenable.then(e=>e.unwrap());
    }
    /**
     * @returns value T
     * @throws Error if result is not valid
     */
    public unwrap(): T{
        // Check
        if(this.isValid()) return this.data;

        // Throw error
        throw this.error;
    }
}
export class ValidResult<T> extends Result<T, Error> {
    public readonly data: T;
    public readonly error: null;
    public constructor(value: T){
        super(false);
        this.data = value;
        this.error = null;
    }
}
export class ErrorResult<E extends Error> extends Result<null, E> {
    public readonly data: null;
    public readonly error: E;
    public constructor(value: E){
        super(true);
        this.data = null;
        this.error = value;
    }
}