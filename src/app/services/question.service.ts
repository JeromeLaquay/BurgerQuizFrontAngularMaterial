import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";


@Injectable()
export class QuestionService {
  constructor(public http: HttpClient) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/questions');
  }

  getOne(id: number){
    console.log("id service = " + id);
    return this.http.get(AppComponent.API_URL+'/questions/'+ id);
  }
}
