import {Quiz} from "../models/model.quiz";
import {Answer} from "../models/model.answer";
export class QuizInstance {
  id : number;
  nextQuestion: boolean=false;
  quiz: Quiz=new Quiz();
  answers:Answer[]= [];
  quiz_id:number;
}
