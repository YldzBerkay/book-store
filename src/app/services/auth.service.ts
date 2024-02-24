import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../models/custom-response';
import { Observable } from 'rxjs';
import { SignUpRequestCommand } from '../models/commands/auth-request-commands';
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
        return await this.request.send("/user/sign-up", command);
    }

    async sendOtpVerification(token: string, email: string, password:string): Promise<CustomResponse<string>> {
        return await this.request.send("/user/send-otp-verification", { token, email, password });
    }

    async additinalFields(name:string,surname:string, birthDate:Date): Promise<CustomResponse<string>> {
        return await this.request.send("/user/additional-fields", { name, surname, birthDate});
    }
}
