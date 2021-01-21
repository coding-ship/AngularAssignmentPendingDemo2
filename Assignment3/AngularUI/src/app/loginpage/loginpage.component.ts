import { Component, OnInit, Output } from '@angular/core';
  import {User} from '../userModel'; 
  import { FormsModule} from '@angular/forms';
  import { AuthService } from './../auth.service';
  import { Router } from '@angular/router';
  import { IfStmt } from '@angular/compiler';
  
  @Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.css']
  })
  export class LoginpageComponent {
    value:any;
    check:boolean=true;
    array:Response[]=[] ;
    statusdata:boolean=true;
    users = {name: '', password: ''};
  
   
  constructor(private auth:AuthService,private router:Router){ this.statusdata=true;  }
  onSubmit(user:User) {
    if(user.name=="" && user.password==""){ this.check=false;}
    else{ this.check=true;
    this.auth.getdata(user).subscribe(response=>{ 
      if(response==null){
        this.statusdata=false;
        
      }
      else{ 
       
        this.router.navigate(['/home']);
      }
      });
    }
  }
     
  Reset(){
    this.statusdata=true;
  }
  update(){
    this.statusdata=true;
  }

Signup(){
  this.router.navigate(['/signup']);
}
  
  
  
  }
  