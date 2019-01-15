import { Choice } from "./model.choice";
import { QuizInstance } from "./model.quiz-instance";

export class Answer {
  id : number;
  choice: Choice= new Choice();
  quiz_instance:QuizInstance=new QuizInstance();
  text: string="";
}
