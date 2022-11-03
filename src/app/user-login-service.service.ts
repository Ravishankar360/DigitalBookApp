import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
  user: User= new User();
  private baseUrl="http://localhost:8083/user/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:8083/user/login",user);
  }

  userRegistration(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:8083/user/addUser",user);
  }

  addBookRegistered(book:Book):Observable<Object>{
    console.log(book);
    return this.httpClient.post("http://localhost:8083/book/addbook",book);
  }
  
  getBookListFromRemote(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8083/book/getBookData');
  }

  deleteBookById(bid: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8083/book/deleteBook/' + bid);
  }

  updateBookRegistered(book:Book):Observable<Object>{
    console.log(book);
    return this.httpClient.post("http://localhost:8083/book/updateBook",book);
  }
}
