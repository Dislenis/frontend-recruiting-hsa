import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams } from'@angular/common/http';
import { User } from '../User/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};


  private apiUrl: string = 'https://api.github.com';
  private user_search_url: string = "";



  userSearch(user:string): Observable<User>{
    this.user_search_url = '/search/users?q='+user;
    return this.http.get<User>(this.apiUrl + this.user_search_url) ;
  }

}
