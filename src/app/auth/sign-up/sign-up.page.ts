import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
 

  constructor(public fb : FormBuilder) { }


  ngOnInit() {
  }

  registerForm = new FormGroup({
    first_name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.maxLength(6),Validators.minLength(15)]),
  });


  registerSubmited(){
    // if(this.Password.value == this.Repassword.value) {
    //   console.log(this.registerForm.valid);
    //   this.repeatPass = 'none'
    // }else {
    //   this.repeatPass = 'inline'
    // }
  }
  

  get first_name(): FormControl{
    return this.registerForm.get("first_name") as FormControl;
  }

  get mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }

  get email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }
 

}
