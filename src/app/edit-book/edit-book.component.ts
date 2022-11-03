import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  updateRegistrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder,private userloginService:UserLoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.updateRegistrationForm= this.formBuilder.group({
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

updateBookRegistered(){
  console.log(this.updateRegistrationForm.value);
  this.userloginService.updateBookRegistered(this.updateRegistrationForm.value).subscribe(data=>{
    alert("Book Data Updated Successfully");
    this.router.navigate(["booklist"]);
  },error=>alert("Something went wrong"));
}

getBookList(){
  this.router.navigate(['/booklist']);
}


}

