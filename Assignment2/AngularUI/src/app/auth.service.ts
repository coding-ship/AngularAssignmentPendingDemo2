import { Injectable } from '@angular/core';
import { User } from './userModel';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // http://localhost:53226/api/Auth/Authorization?username=Abhishek&password=123562
// urldemo='http://localhost:53226/api/Auth/Authorization?username=Abhishek&password=123562';
//http://localhost:53226/api/Authorization?username=admin&password=123562
 url = 'http://localhost:53226/api/Authorization?username=';  
  constructor(private http:HttpClient) { }
  
  getdata(user:User):Observable<any> {  
   return this.http.get(this.url + user.name+'&password='+user.password);  
  } 
}
