export class CustomResponse<TResponse> {
    Data: TResponse;
    IsSuccessful: boolean;
    Error: string[];
}