import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdashboardService } from '../customerdashboard.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  state:any;
  data:any;
  status:boolean=false;
  id:any;
  value:any;

  
  custdata = {id:0, tracername:'',observationdate:'',observationname:'',noobservation:0,mail:''};
  
    
    constructor(public activatedRoute: ActivatedRoute,private router:Router,private cd:CustomerdashboardService) {}
    
    ngOnInit() {
      this.state = this.activatedRoute.paramMap;
      this.custdata.mail=window.history.state.mail;
      this.custdata.id=window.history.state.id;
        this.custdata.tracername=window.history.state.tracername;
        this.custdata.observationdate=window.history.state.observationdate;
        this.custdata.observationname=window.history.state.observationname;
        this.custdata.noobservation=window.history.state.noobservation;
        //console.log(window.history.state.fname);
        //console.log(this.cust.id);
       
    }
    //http://localhost:53226/api/Customer/UpdateTracer?id=1
    
    onsubmit(tracer:Userdata){
      if(tracer.tracername==null || tracer.observationname==null ||
         tracer.noobservation==null || tracer.observationdate==null) { this.status=true; }
         else{  this.status=true;
      tracer.id=this.custdata.id;
      console.log("tracerid"+tracer.id);
      console.log(tracer);
      this.cd.updatetracer(this.custdata.mail,tracer.id,tracer).subscribe(response=>{console.log(response)},(error:any)=>console.log(error));
      // customer.id=this.cust.id;
      // this.customer.updateuser(customer.id,customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
      
      this.router.navigate(['/customerdash'],{state:{mail:this.custdata.mail}});
    
    } }
    reset(){
      this.status=false;
    }
  
  
  }
  