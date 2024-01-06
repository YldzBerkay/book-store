import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../models/custom-response';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    userEmail: string;
    baseUrl = 'https://localhost:7044/api/v1/user';

    constructor(private httpClient: HttpClient) {

    }

    signUp(email: string, password: string): Observable<CustomResponse<string>> {

        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/sign-up`, null,{ params: { email, password } });
    }

    sendOtpVerification(token: string): Observable<CustomResponse<string>> {
        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/send-otp-verification`, { token });
    }

    additinalFields(name:string,surname:string, birthDate:Date): Observable<CustomResponse<string>> {
        return this.httpClient.post<CustomResponse<string>>(`${this.baseUrl}/additional-fields`, { name, surname, birthDate });
    }
}
