import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";
import { QuizInstance } from '../models/model.quiz-instance';


@Injectable()
export class QuizInstanceService {
  constructor(public http: HttpClient) { }

  getAll(){
    return this.http.get(AppComponent.API_URL+'/quiz_instances');
  }

  getOne(id: number){
    return this.http.get(AppComponent.API_URL+'/quiz_instances/'+ id);
  }

  save(quizInstance: QuizInstance, idQuiz:number){
    console.log(quizInstance.nextQuestion+ "    " +idQuiz);
    console.log(AppComponent.API_URL+'/quiz_instances/'+idQuiz);
    return this.http.post(AppComponent.API_URL+'/quiz_instances/'+idQuiz, quizInstance);
  }
}
