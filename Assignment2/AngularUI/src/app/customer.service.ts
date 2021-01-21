import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private url='http://localhost:53226/api/';
//http://localhost:53226/api/Auth/AddNewUser
  constructor(private http:HttpClient) { }
    
  getusers():Observable<Customer[]>{
return this.http.get<Customer[]>(this.url+"GetUsers");
   }
  // return this.httpClient.post<Post>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
   
  
  //  adduser(user:Customer){  
  //  //console.log(user);
  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
  //  return this.http.post(this.url+"AddNewUser/",user,httpOptions);  
  //  }  
   adduser(user:Customer):Observable<Customer>{  
    //console.log(user);
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Customer>(this.url+'AddNewUser',user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
    //.pipe(catchError(this.handleError));  
    }  
  
  
   
  // http://localhost:53226/api/AddNewUserData?fname=shubham&lname=shubham&phone=9415311828&role=User
  //  adduser(user:Customer){
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
  //   return this.http.post(this.url+"AddNewUserData?fname="+user.fname+
  //   "&lname="+user.lname+"&phone="+user.phone+"&role="+user.role,httpOptions); 
  //  }
  

}
