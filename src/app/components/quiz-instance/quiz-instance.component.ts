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
  quiz:Quiz;
  quizInstance:QuizInstance;
  questions:Question[];
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
      .subscribe(data => {
        this.quizInstance = data.json()
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.id);
        this.quizService.getOne(this.quizInstance.quiz.id)
        .subscribe(data => {
          this.quiz = data.json();
          this.questions=this.quiz.questions;
          console.log("quiz name= "+this.quiz.name);
          }
      )
        }
      )
  }

  demarrerQuestions(){
    this.router.navigate(['/quiz/'+ this.idInstance+'/answers/0']);
  }
}
