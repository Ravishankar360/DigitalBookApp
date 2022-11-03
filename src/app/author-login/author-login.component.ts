import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.scss']
})
export class AuthorLoginComponent implements OnInit {
  user: User= new User();
  constructor(private loginService: UserLoginServiceService, private router: Router) { }

  ngOnInit(): void {} 

  userlogin(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully");
      this.router.navigate(["booklist"]);
    },error=>alert("Please enter correct username and password"));
  }
  registrationUser(){
    this.router.navigate(['/registration']);
  }

  signUp(){
    this.router.navigate(['/login']);
  }
}
