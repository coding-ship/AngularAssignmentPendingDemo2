import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerdashboardService {

private url='http://localhost:53226/api/Customer/';

  constructor(private http:HttpClient) {
    
   }
//http://localhost:53226/api/Customer/Getdetails?usermail=a%40gmail.com 
   getdata(mail:any):Observable<Userdata[]>
   { console.log("servicecheckemail  "+mail);
     return this.http.get<Userdata[]>(this.url+'Getdetails?usermail='+mail);
   }
   //http://localhost:53226/api/Customer/DeleteTracer?usermail=a%40gmail.com&id=1
  // http://localhost:53226/api/Customer/DeleteTracer?id=1
  deletedata(id:number):Observable<Userdata>
  { console.log("delete id"+id);
  return this.http.delete<Userdata>(this.url+'DeleteTracer?id='+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
  }
  //http://localhost:53226/api/Customer/UpdateTracer?usermail=a%40gmail.com&id=2
  updatetracer(mail:any,id:number,tracer:Userdata):Observable<Userdata>
  { console.log("service id & value"+id);
   console.log(tracer);
    return this.http.put<Userdata>(this.url+'UpdateTracer?usermail='+mail+'&id='+id,tracer,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  

  }
  //http://localhost:53226/api/Customer/Addtrace?usermail=a%40gmail.com
 
  addtracer(mail:any,tracer:Userdata):Observable<Userdata>
  {
  return this.http.post<Userdata>(this.url+'Addtrace?usermail='+mail,tracer,{
    headers:new HttpHeaders({
   'Content-Type':'application/json'
    })
   });
}
}
