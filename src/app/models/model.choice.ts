import {Answer} from "../models/model.answer";

export class Choice {
  id : number;
  value: string="";
  answers: Answer[]=[];
}
