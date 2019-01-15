import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/model.quiz';
import { Question } from '../../models/model.question';
import { QuizInstance } from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';

@Component({
  selector: 'app-quiz-instance',
  templateUrl: './quiz-instance.component.html',
  styleUrls: ['./quiz-instance.component.css']
})
export class QuizInstanceComponent implements OnInit {
  quiz:Quiz=new Quiz();
  quizInstance:QuizInstance= new QuizInstance();
  questions:Question[]= [];
  idInstance: number;

  constructor(private quizService :QuizService,
    private quizInstanceService :QuizInstanceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.idInstance = parseInt(this.route.snapshot.paramMap.get('id_instance'));
    this.getQuiz();
  }

  getQuiz(){
    this.quizInstanceService.getOne(this.idInstance)
      .subscribe((data: QuizInstance) => {
        this.quizInstance = data;
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.id);
        this.quizService.getOne(this.quizInstance.quiz.id)
        .subscribe((data: Quiz) => {
          this.quiz = data;
          this.questions=this.quiz.questions;
          console.log("quiz name= "+this.quiz.name);
          }
      )
        }
      )
  }

  demarrerQuestions(){
    this.router.navigate([`/presentateur/${this.idInstance}/reponses/0`]);
  }
}
