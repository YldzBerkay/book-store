import { Otp } from "./otp";
import { RefreshToken } from "./refresh-token";

export class User{
    id: string;
    email: string;
    name: string;
    surname: string;
    refreshToken: RefreshToken;
    otp: Otp;
}