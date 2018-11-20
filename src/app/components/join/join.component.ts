import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/model.quiz';
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

  constructor(private quizService :QuizService,
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
      .subscribe(data => {
        this.quizInstance = data.json()
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.id);
        console.log("quizinstance quiz id= "+this.quizInstance.quiz.name);
      }
    )
  }

  questionSuivante(){
    this.router.navigate(['/join_quiz/'+ this.idInstance+'/questions/0']);
    }
}
