import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Customer } from './../customer';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
list:Customer[]=[];
emaildata:any='';
userdata:any='';
stat:boolean=false;
showdata:boolean=false;
value:any;
  constructor(private customers:CustomerService,private router:Router) {
    this.emaildata='';
    this.showdata=false;
    this.userdata='';
    this.stat=false;
    setTimeout(() => {
      this.customers.getusers().subscribe(response=>{this.list=response});
    
     }, 500)
    
   // this.customers.getusers().subscribe(response=>{this.list=response});
    
   }

  ngOnInit(): void {
    
  }
  Edit(customer:Customer){
    
   this.router.navigate(['/edit'], { state: { id:customer.id,fname: customer.fname,lname:customer.lname,phone:customer.phone } });
   this.customers.getusers().subscribe(response=>{this.list=response});
    
  }
  Delete(){ 
    
     this.customers.deleteuser(this.emaildata).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
     window.location.reload();
    
    
   
    
  }
  Del(){ this.showdata=false;
    this.userdata='';
    this.emaildata='';
    window.location.reload();
  }
  DeleteUser(customer:Customer){
    this.userdata=customer.fname;
    this.emaildata=customer.email;
    console.log(this.emaildata);
    this.showdata=true;
  }

}
