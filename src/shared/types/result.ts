export type ApiResult<T> = {
    isSuccess: boolean;
    successMessage: string | null;
    isFailure: boolean;
    errorMessage: string | null;
    statusCode: number;
    validationErrors?: Record<string, string[]>;
    value?: T;
};