import { Injectable } from '@angular/core';
import {Choice} from "../models/model.choice";
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";

@Injectable()
export class ChoiceService {
  constructor(public http: HttpClient) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/choices');
  }

  save(choice: Choice){
    return this.http.post(AppComponent.API_URL+'/choices', choice);
  }
}
