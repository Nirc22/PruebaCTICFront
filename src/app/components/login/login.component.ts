import { Component, OnInit } from '@angular/core';
import { LoginRequets } from 'src/app/interfaces/login-requets';
import { FormBuilder, NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLoginUsuario: FormGroup = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  responseService:any;
  loginForm: LoginRequets = {
    email:'',
    password:''
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formLoginUsuario.value);

    this.authService.login(this.formLoginUsuario.value)
      .subscribe(response => {
        console.log("Logeado")
        this.router.navigateByUrl('/dashboard');
    })
  }

}
