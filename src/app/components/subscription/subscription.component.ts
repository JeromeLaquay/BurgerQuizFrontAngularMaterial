import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/model.user';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  user : User=new User();
  errorMessage: string;
  mail : string="";
  newsletter : boolean=false;

  constructor(private userService :UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  subscription(){
    console.log("mail = "+ this.mail);
    this.user.mail = this.mail;
    this.user.newsletter = this.newsletter;
    this.userService.save(this.user).subscribe(
      res => {console.log("Envoyé");},
      err => {console.log("Error occured");
      this.errorMessage = "error";}
    );
  }

  changeNewsletter(){
    if(this.newsletter){
      this.newsletter=false;
    }else{
      this.newsletter=true;
    }
  }
}
