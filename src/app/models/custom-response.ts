import { AuthToken } from "./auth/auth-token";
import { RefreshToken } from "./auth/refresh-token";

export class CustomResponse<TResponse> {
    Data: TResponse;
    IsSuccessful: boolean;
    AuthToken: AuthToken;
    RefreshToken: RefreshToken;
}