import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,} from '@angular/material';

import {AnswerComponent} from "./components/answer/answer.component";
import {JoinComponent} from "./components/join/join.component";
import {QuestionComponent} from "./components/question/question.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {SubscriptionComponent } from './components/subscription/subscription.component';
import { QuizInstanceComponent } from './components/quiz-instance/quiz-instance.component';

import { QuizService } from './services/quiz.service';
import { QuizInstanceService } from './services/quiz-instance.service';
import { AnswerService } from './services/answer.service';
import { QuestionService } from './services/question.service';
import { UserService } from './services/user.service';
import { ChoiceService } from './services/choice.service';



import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports:[
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    TableModule],
  declarations: [
    AppComponent,
    AnswerComponent,
    QuizComponent,
    QuestionComponent,
    JoinComponent,
    SubscriptionComponent,
    QuizInstanceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    TableModule
  ],
  providers: [QuizService, 
    AnswerService,
    QuestionService,
    UserService,
    ChoiceService,
    QuizInstanceService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent,
    AnswerComponent,
    QuizComponent,
    QuestionComponent,
    JoinComponent,
    SubscriptionComponent,
    QuizInstanceComponent]
})
export class AppModule { }
