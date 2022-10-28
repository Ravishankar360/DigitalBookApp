import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm= this.formBuilder.group({
      saluatation:['',Validators.required],
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobileNumber:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      postalCode:['',Validators.required],
      phoneNumber:['',Validators.required]
  })

}
addRegistered(){
  console.log(this.registrationForm.value);
  console.log("Registration successfully");
}
}
