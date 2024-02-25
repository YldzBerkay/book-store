import { Injectable } from '@angular/core';
import { CustomResponse } from '../models/custom-response';
import { AdditionalFieldsRequestCommand, RefreshTokenRequestCommand, SendOtpVerificationRequestCommand, SignInResponse, SignUpRequestCommand } from '../models/commands/auth-request-commands';
import { RequestService } from './base/request.service';
import { AuthToken } from '../models/auth/auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userEmail: string;
    userPassword: string;

    constructor(private request: RequestService) { }

    async signUp(command: SignUpRequestCommand): Promise<CustomResponse<string>> {
        return await this.request.send("/auth/sign-up", command);
    }

    async sendOtpVerification(command: SendOtpVerificationRequestCommand): Promise<CustomResponse<string>> {
        return await this.request.send("/auth/send-otp-verification", command);
    }

    async additinalFields(command: AdditionalFieldsRequestCommand): Promise<CustomResponse<SignInResponse>> {
        return await this.request.send("/auth/additional-fields", command);
    }

    async signIn(command: SignUpRequestCommand): Promise<CustomResponse<SignInResponse>> {
        return await this.request.send("/auth/sign-in", command);
    }

    async refreshToken(command: RefreshTokenRequestCommand): Promise<CustomResponse<AuthToken>> {
        return await this.request.send("/auth/refresh-token", command);
    }

    updateUser(user: SignInResponse): void {
        localStorage.setItem('userId', user.User.Id);
        localStorage.setItem('userAuthToken', user.AuthToken.Token);
        localStorage.setItem('userRefreshToken', user.RefreshToken);
        const existingDate = new Date(user.AuthToken.Expires);
        const formattedDate = existingDate.toDateString() + ' ' + existingDate.toLocaleTimeString();
        localStorage.setItem('userExpire', JSON.stringify(formattedDate));
    }

    updateToken(token: AuthToken): void {
        localStorage.setItem('userAuthToken', token.Token);
        const existingDate = new Date(token.Expires);
        const formattedDate = existingDate.toDateString() + ' ' + existingDate.toLocaleTimeString();
        localStorage.setItem('userExpire', JSON.stringify(formattedDate));
    }
}
