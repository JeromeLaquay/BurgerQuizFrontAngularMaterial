import {Choice} from "../models/model.choice";

export class Question {
  id : number;
  text: string="";
  choices: Choice[]=[];
  typequestion: string="";
}
