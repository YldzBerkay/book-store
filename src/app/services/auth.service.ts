import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../models/custom-response';
import { Observable } from 'rxjs';
import { AdditionalFieldsRequestCommand, SendOtpVerificationRequestCommand, SignUpRequestCommand } from '../models/commands/auth-request-commands';
import { RequestService } from './base/request.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userEmail: string;
    userPassword: string;
    baseUrl = 'https://localhost:7044/api/v1/user';

    constructor(private httpClient: HttpClient, private request: RequestService) {

    }

    async signUp(command: SignUpRequestCommand): Promise<CustomResponse<string>> {
        return await this.request.send("/auth/sign-up", command);
    }

    async sendOtpVerification(command: SendOtpVerificationRequestCommand): Promise<CustomResponse<string>> {
        return await this.request.send("/auth/send-otp-verification",command);
    }

    async additinalFields(command: AdditionalFieldsRequestCommand): Promise<CustomResponse<string>> {
        return await this.request.send("/auth/additional-fields", command);
    }
}
