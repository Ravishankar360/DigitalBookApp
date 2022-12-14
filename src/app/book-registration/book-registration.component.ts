import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.scss']
})
export class BookRegistrationComponent implements OnInit {
  bookRegistrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder,private userloginService:UserLoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.bookRegistrationForm= this.formBuilder.group({
      bookTitle:['',Validators.required],
      category:['',Validators.required],
      imagePath:['',],
      price:['',Validators.required],
      publisherName:['',Validators.required],
      isActive:['',Validators.required],
      bookContent:['',Validators.required],
      bookAuthorName:['',],
  })
}
signUp(){
  this.router.navigate(['/login']);
}

addBookRegistered(){
  console.log(this.bookRegistrationForm.value);
  this.userloginService.addBookRegistered(this.bookRegistrationForm.value).subscribe(data=>{
    alert("Book Created Successfully");
    this.router.navigate(["booklist"]);
  },error=>alert("Something went wrong"));
}

getBookList(){
  this.router.navigate(['/booklist']);
}

selectedFile: any = null;

onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

}
  
}

