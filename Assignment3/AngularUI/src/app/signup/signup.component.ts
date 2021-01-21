import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { CustomerService } from './../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  statusdata=true;
  check:boolean=false;
  value:any;
  cust = {fname: null, lname: null,phone: null,role:'User',email:null,password:null};
  constructor(private Customerservice:CustomerService,private router:Router) { }
  ngOnInit(): void {
  }
  onsubmit(customer:Customer){
    if(customer.email==null || customer.fname==null || customer.lname==null || customer.password==null ||
    customer.phone==null ){
   this.check=true;
    }
    else{
    
    
    //window.alert("Account Successfully Created Now You Can Login!");
    console.log(customer);
    console.log(customer.password);
    console.log(customer.email);
   
    //this.Customerservice.adduser(customer);
    this.Customerservice.adduser(customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
    //this.router.navigate(['/']);
    this.statusdata=false;
    }

  }
  Reset(){
    this.statusdata=true;
    this.check=false;
  }

}
