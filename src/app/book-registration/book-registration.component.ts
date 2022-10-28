import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.scss']
})
export class BookRegistrationComponent implements OnInit {
  bookRegistrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.bookRegistrationForm= this.formBuilder.group({
      title:['',Validators.required],
      category:['',Validators.required],
      image:['',Validators.required],
      price:['',Validators.required],
      publisher:['',Validators.required],
      active:['',Validators.required],
      mobileNumber:['',Validators.required],
      content:['',Validators.required]
  })
}
addRegistered(){
  console.log(this.bookRegistrationForm.value);
  console.log("Registration successfully");
}


}
