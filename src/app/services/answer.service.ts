import { Injectable } from '@angular/core';
import {Answer} from "../models/model.answer";
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";

@Injectable()
export class AnswerService {
  constructor(public http: HttpClient) { }

  save(answer:Answer, idQuizInstance:number, idChoice){
    return this.http.post(AppComponent.API_URL+'/answers/'+idQuizInstance+'/'+idChoice, answer);
  }

}
