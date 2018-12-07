import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";


@Injectable()
export class QuizService {
  constructor(public http: HttpClient) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/quiz');
  }

  getOne(id: number){
    return this.http.get(AppComponent.API_URL+'/quiz/'+ id);
  }
}
