import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

const PATTERN = {
  NO_SPECIAL_CHARACTER: /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿]*$/,
  EMAIL: /^([A-Za-z0-9_%+-]+\.?)*[A-Za-z0-9_%+-]+@[A-Za-z]+(\.[A-Za-z]+){1,2}$/,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isActive: boolean = false;
  formLogin: FormGroup | any;
  formRegister: FormGroup | any;

  constructor(
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
  ) {

  }

  ngOnInit() {
    this.initFormLogin();
    this.initFormRegister();
  }

  initFormLogin() {
    this.formLogin = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      password: ['', Validators.required]
    });
  }

  initFormRegister() {
    this.formRegister = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isActive = !this.isActive;
  }

  register() {
    this.isActive = !this.isActive;
  }

  handleSignIn() {
    if(this.formLogin.invalid) return;
    this.closeDialog(this.formLogin.value);
  }

  handleRegister() {
    if(this.formRegister.invalid) return;
    this.login();
    this.formLogin.patchValue({
      email: this.formRegister.get('email').value,
      password: this.formRegister.get('password').value,
    });
  }

  closeDialog(value?: any){
    this.dialogRef.close(value);
  }
}
