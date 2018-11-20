import {Question} from "../models/model.question";
import { QuizInstance } from "./model.quiz-instance";

export class Quiz {
  id : number;
  name: string="";
  questions: Question[]=[];
  quizInstance: QuizInstance[]=[];
}
