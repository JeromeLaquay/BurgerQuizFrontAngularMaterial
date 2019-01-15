import { Component, OnInit } from '@angular/core';
import {QuizInstance} from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';
import { AnswerService } from '../../services/answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Choice } from '../../models/model.choice';
import { Answer } from 'src/app/models/model.answer';
import { Question } from 'src/app/models/model.question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  //param
  num_question: number;
  idinstance: number;
  
  question:Question=new Question();
  quizInstance : QuizInstance=new QuizInstance();
  favoriteChoice: Choice=new Choice();
  answer : Answer=new Answer();
  errorMessage: string;
  disabled:boolean=false;
  reponse : string="";

  
  constructor(private quizInstanceService :QuizInstanceService,
    private route: ActivatedRoute,
    private router: Router,
    private answerService : AnswerService) { }

  ngOnInit() {
    this.disabled;
    this.route.params.subscribe((params) => {
      this.num_question = parseInt(params.num_question);
      this.idinstance = parseInt(params.id_instance);
      this.getQuizInstance();
    });
  }

  getQuizInstance(){
    this.quizInstanceService.getOne(this.idinstance)
      .subscribe((data: QuizInstance) => {
        this.quizInstance = data;
        this.question=this.quizInstance.quiz.questions[this.num_question];
        }
      )
  }

  createAnswer(){
    this.answer.text=this.reponse;
    this.answer.choice=this.favoriteChoice;
    this.answer.quiz_instance=this.quizInstance;
    this.answerService.save(this.answer,this.answer.quiz_instance.id,this.answer.choice.id).subscribe(
      (data: Answer) => {
                this.answer = data;
              },
      err => {
                this.errorMessage = "error";
              }
    );
    this.disabled=true;
    this.disabledButton();
  }

  disabledButton(){
    return this.disabled;
  }

  questionSuivante(){
    if(this.quizInstance.quiz.questions.length-1 == this.num_question){
        this.router.navigate(['/subscription']);
    }else{
      this.num_question++;
      this.disabled=false;
      this.router.navigate([`/join_quiz/${this.idinstance}/questions/${this.num_question}`]);
    }
  }

  typeQuestion(){
    if(this.question.typequestion == "qcm"){
      console.log("question type : "+this.question.typequestion+ " true ");
      return true;
    }else{
      console.log("question type : "+this.question.typequestion+ " false");
      return false;
    }
  }
}
