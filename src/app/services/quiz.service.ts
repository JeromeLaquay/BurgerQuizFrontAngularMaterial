import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";


@Injectable()
export class QuizService {
  constructor(public http: Http) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/quiz');
  }

  getOne(id: number){
    return this.http.get(AppComponent.API_URL+'/quiz/'+ id);
  }
}
