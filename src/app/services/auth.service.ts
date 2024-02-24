import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../models/custom-response';
import { Observable } from 'rxjs';
import { SignUpRequestCommand } from '../models/commands/auth-request-commands';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    userEmail: string;
    userPassword: string;
    baseUrl = 'https://localhost:7044/api/v1/user';

    constructor(private httpClient: HttpClient) {

    }

    signUp(command: SignUpRequestCommand): Observable<CustomResponse<string>> {
        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/sign-up`, command);
    }

    sendOtpVerification(token: string, email: string, password:string): Observable<CustomResponse<string>> {
        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/send-otp-verification`,null, { params: { token, email, password } });
    }

    additinalFields(name:string,surname:string, birthDate:Date, email: string): Observable<CustomResponse<string>> {
        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/additional-fields`,null, { params: { name, surname, birthDate: birthDate.toString(), email } });
    }
}
