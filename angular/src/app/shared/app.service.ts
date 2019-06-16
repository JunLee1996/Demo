import { Injectable } from '@angular/core';
import { User } from '../login/shared/user.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public user: User;
  constructor() { }
}
