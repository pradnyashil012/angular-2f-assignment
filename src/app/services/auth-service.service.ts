import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(data:string):Observable<any> {
    
    return this.http.post(`${baseUrl}api/login`, data, {responseType: 'text'});
  }

  confirm(data:string):Observable<any> {
    
    return this.http.post(`${baseUrl}api/login/confirm`, data, {responseType: 'text'});
  }
}
