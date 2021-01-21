import { Injectable } from '@angular/core';
import { User } from './userModel';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // http://localhost:53226/api/Auth/Authorization?username=Abhishek&password=123562
// urldemo='http://localhost:53226/api/Auth/Authorization?username=Abhishek&password=123562';
//http://localhost:53226/api/Authorization?username=admin&password=123562
 url = 'http://localhost:53226/api/Authorization?username=';  
  constructor(private http:HttpClient) { }
  
  getdata(user:User):Observable<User> {  
   return this.http.get<User>(this.url + user.name+'&password='+user.password);
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}
  } 

