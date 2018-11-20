import { Component, OnInit } from '@angular/core';
import {QuizInstance} from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';
import { AnswerService } from '../../services/answer.service';
import { ChoiceService } from '../../services/choice.service';
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

  
  constructor(private quizInstanceService :QuizInstanceService,
    private route: ActivatedRoute,
    private router: Router,
    private answerService : AnswerService) { }

  ngOnInit() {
    this.disabled;
    this.num_question = parseInt(this.route.snapshot.paramMap.get('num_question'));
    this.idinstance = parseInt(this.route.snapshot.paramMap.get('id_instance'));
    this.getQuizInstance();
    //setTimeout(function () {
      //location.reload();
    //}, 5000);
  }

  getQuizInstance(){
    this.quizInstanceService.getOne(this.idinstance)
      .subscribe(data => {
        this.quizInstance = data.json();
        this.question=this.quizInstance.quiz.questions[this.num_question];
        console.log("question ="+ this.question.text);
        }
      )
  }

  createAnswer(){
    
    this.answer.choice=this.favoriteChoice;
    this.answer.quiz_instance=this.quizInstance;
    this.answerService.save(this.answer,this.answer.quiz_instance.id,this.answer.choice.id).subscribe(
      res => {
                this.answer = res.json();
                console.log("Envoyé");
              },
      err => {
                console.log("Error occured");
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
      this.router.navigate(['/join_quiz/'+ this.idinstance+'/questions/'+this.num_question]);
      location.reload();
    }
  }
}
