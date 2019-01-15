import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../models/model.question';
import { QuizInstance } from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  quizInstance:QuizInstance;
  questions:Question[];
  idInstance: number;

  constructor(
    private quizInstanceService :QuizInstanceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.idInstance = parseInt(this.route.snapshot.paramMap.get('id_instance'));
    this.getQuiz();
  }

  getQuiz(){

    console.log("idInstance ="+this.idInstance);
    this.quizInstanceService.getOne(this.idInstance)
      .subscribe((data: QuizInstance) => {
        this.quizInstance = data;
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.id);
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.name);
      }
    )
  }

  questionSuivante(){
    this.router.navigate([`/public/${this.idInstance}/questions/0`]);
    }
}
