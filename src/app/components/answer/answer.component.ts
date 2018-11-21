import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/model.question';
import {Choice} from '../../models/model.choice';
import { ActivatedRoute, Router } from '@angular/router';
import {QuizInstance} from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';
import { ChoiceResult } from '../../models/model.choice-result';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  i:number=0;
  nombreReponse:number=0;
  num_question: number;
  idinstance: number;
  
  choiceResults:ChoiceResult[]=[];
  question:Question=new Question();
  quizInstance : QuizInstance=new QuizInstance();
  errorMessage: string;
  displayedColumns: string[] = ['choix','nombre'];

  constructor(private quizInstanceService :QuizInstanceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.num_question = parseInt(this.route.snapshot.paramMap.get('num_question'));
    this.idinstance = parseInt(this.route.snapshot.paramMap.get('id_instance'));
    this.getQuizInstance();
  }

  getQuizInstance(){
    console.log("idinstance = "+ this.idinstance);
    this.quizInstanceService.getOne(this.idinstance)
      .subscribe(data => {
        this.quizInstance = data.json();
        this.question=this.quizInstance.quiz.questions[this.num_question];
        for (let choice of this.question.choices) {
            this.choiceResults[this.i]=new ChoiceResult();
            console.log("i = "+this.i);
            this.choiceResults[this.i].value=choice.value;
            this.nombreReponse=0;
            for(let answerChoice of choice.answers){                
                for(let answerQuizIns of this.quizInstance.answers){
                  if(answerChoice.id == answerQuizIns.id){
                    this.nombreReponse++;
                  }
                }
            }
          this.choiceResults[this.i].nombreRep=this.nombreReponse;
          this.i++;
        }
        for(let choiceResult of this.choiceResults){
          console.log("choice value nombre ="+choiceResult.value+" "+choiceResult.nombreRep);
        }
      }
    )
  }

  questionSuivante(){
    if(this.quizInstance.quiz.questions.length-1 == this.num_question){
      this.router.navigate(['/subscription']);
    }else{
      this.num_question++;
      this.router.navigate(['/quiz/'+ this.idinstance+'/answers/'+this.num_question]);
      location.reload();
    }
  }
  
}