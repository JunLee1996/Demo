import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // now returns an Observable of Config
  header = new HttpHeaders({'Content-Type' : 'application/json'})
  constructor(private http: HttpClient) { }
  getConfig():Observable<any> {
    return this.http.get<any>('http://localhost:5000/api/login',{headers:this.header});
  }
  login (user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/login', user)
  }
}
