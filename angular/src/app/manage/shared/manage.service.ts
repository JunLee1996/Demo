import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from './manage.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
 
  constructor(private http: HttpClient) { }
  getallMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:5000/api/manage');
  }
}
