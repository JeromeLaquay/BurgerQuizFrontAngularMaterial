import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {User} from "../models/model.user";


@Injectable()
export class UserService {
  constructor(public http: Http) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/users');
  }

  getOne(id: string){
    return this.http.get(AppComponent.API_URL+'/users/'+ id);
  }

  save(user: User){
    return this.http.post(AppComponent.API_URL+'/subscription', user);
  }
}
