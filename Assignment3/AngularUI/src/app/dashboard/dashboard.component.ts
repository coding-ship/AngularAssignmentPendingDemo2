import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './../customer';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
list:Customer[]=[];
value:any;
  constructor(private customers:CustomerService,private router:Router) { }

  ngOnInit(): void {
    
    
    this.customers.getusers().subscribe(response=>{this.list=response});
    
  }
  Edit(customer:Customer){
    
   this.router.navigate(['/edit'], { state: { id:customer.id,fname: customer.fname,lname:customer.lname,phone:customer.phone } });
   
  }
  Delete(id:number){
    var check=window.confirm("Are you sure? You want to delete this Entry?");
   
    if(check==true){
     this.customers.deleteuser(id).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
     window.location.reload();
    }
    
   
    
  }

}
