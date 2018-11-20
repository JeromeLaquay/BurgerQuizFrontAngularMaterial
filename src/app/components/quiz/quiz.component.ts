import { Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/model.quiz';
import { QuizInstance } from '../../models/model.quiz-instance';
import { QuizInstanceService } from '../../services/quiz-instance.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['../../app.component.css']
})
export class QuizComponent implements OnInit {
  quizs: Quiz[] = [];
  errorMessage: String;
  displayedColumns: string[] = ['name','nombre','choisir'];
  quizinstance : QuizInstance=new QuizInstance();
  quiz:Quiz=new Quiz();
  
  constructor(private quizService :QuizService,
              private quizInstanceService :QuizInstanceService,
              private route: ActivatedRoute,
              private router: Router) { 
  }
  
  ngOnInit() {
    this.getAllQuizs(); 
  }

  getAllQuizs(){
    this.quizService.getAll()
      .subscribe(data => {
        this.quizs = data.json(); 
        console.log("taille ="+ this.quizs.length);}
      )
  }

  lancer(idQuiz : number){
    this.quizInstanceService.save(this.quizinstance,idQuiz).subscribe(
      res => {
              console.log("requete effectuée");
              this.quizinstance = res.json();
              this.router.navigate(['/quiz/'+ this.quizinstance.id]);
            },
      err => {console.log("Error occured");
      this.errorMessage = "error";}
    );

  }
}
