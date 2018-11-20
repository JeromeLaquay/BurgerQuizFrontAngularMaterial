import { Injectable } from '@angular/core';
import {Choice} from "../models/model.choice";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";

@Injectable()
export class ChoiceService {
  constructor(public http: Http) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/choices');
  }

  getOne(id: number){
    return this.http.get(AppComponent.API_URL+'/choices/'+ id);
  }

  save(choice: Choice){
    return this.http.post(AppComponent.API_URL+'/choices', choice);
  }

  getByQuestion(idQuestion: number){
    return this.http.get(AppComponent.API_URL+'/questions/'+ idQuestion+"/choices");
  }
}
