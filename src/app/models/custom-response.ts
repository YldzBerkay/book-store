import { AuthToken } from "./auth/auth-token";
import { RefreshToken } from "./auth/refresh-token";

export class CustomResponse<TResponse> {
    data: TResponse;
    isSuccessful: boolean;
    authToken: AuthToken;
    refreshToken: RefreshToken;
}