import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CustomResponse } from 'src/app/models/custom-response';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = 'https://localhost:7044/api/v1';
  constructor(private httpClient: HttpClient) { }

  async send<T>(path: string, command: {}): Promise<CustomResponse<T>> {
    const response = await firstValueFrom(this.httpClient.post<CustomResponse<T>>(`${this.baseUrl}${path}`, command))
    return response;
  }
}
