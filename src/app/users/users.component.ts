import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    allowNewUser=false
    userName=""
    booleanValue=false;
    userIsCreated="No user is there"

    constructor(){
      // setTimeout(() => {
      //   this.allowNewUser=true;
      // }, 5000);
    }

    onClick(){
      this.booleanValue=true;
      this.userIsCreated="User is Created"
      console.log("Anand");      
    }

    onChange(event:any){
      this.userName=event.target.value
      console.log(event.target.value)
    }
}

