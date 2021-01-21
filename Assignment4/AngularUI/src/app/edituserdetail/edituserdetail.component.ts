import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-edituserdetail',
  templateUrl: './edituserdetail.component.html',
  styleUrls: ['./edituserdetail.component.css']
})
export class EdituserdetailComponent implements OnInit {
state:any;
data:any;
id:any;
check:boolean=false;
status:boolean=false;
value:any;
cust = {id:0,fname: null, lname: null,phone: null,role:'User'};

  
  constructor(public activatedRoute: ActivatedRoute,private customer:CustomerService,private router:Router) {}
  
  ngOnInit() {
    this.state = this.activatedRoute.paramMap;
      this.cust.id=window.history.state.id;
      this.cust.fname=window.history.state.fname;
      this.cust.lname=window.history.state.lname;
      this.cust.phone=window.history.state.phone;
      //console.log(window.history.state.fname);
      //console.log(this.cust.id);
     
  }
  
  onsubmit(customer:Customer){
   if( customer.fname==null || customer.lname==null || customer.phone==null

   ){ this.status=true;}
   else{ this.status=false;
    customer.id=this.cust.id;
    this.customer.updateuser(customer.id,customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
    
    this.router.navigate(['/home']);
   }
  
  }
  reset(){
    this.status=false;
  }


}
