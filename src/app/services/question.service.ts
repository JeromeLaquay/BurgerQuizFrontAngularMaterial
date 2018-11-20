import { Injectable } from '@angular/core';
import {Question} from "../models/model.question";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";


@Injectable()
export class QuestionService {
  constructor(public http: Http) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/questions');
  }

  getOne(id: number){
    console.log("id service = " + id);
    return this.http.get(AppComponent.API_URL+'/questions/'+ id);
  }
}
