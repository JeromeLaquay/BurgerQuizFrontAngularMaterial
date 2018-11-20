import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnswerComponent} from "./components/answer/answer.component";
import {JoinComponent} from "./components/join/join.component";
import {QuestionComponent} from "./components/question/question.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuizInstanceComponent} from "./components/quiz-instance/quiz-instance.component";
import {SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  { path: 'quiz/:id_instance/answers/:num_question', component: AnswerComponent },
  { path: 'join_quiz/:id_instance', component: JoinComponent },
  { path: 'join_quiz/:id_instance/questions/:num_question', component: QuestionComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'quiz/:id_instance', component: QuizInstanceComponent},
  { path: 'subscription', component: SubscriptionComponent},

  // otherwise redirect to profile
  { path: '**', redirectTo: '/question/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
