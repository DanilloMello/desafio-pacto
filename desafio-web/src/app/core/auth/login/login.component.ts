import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupForm } from '../../modal/signupform';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  standalone: false
})
export class LoginComponent implements OnInit {

  isLogin: boolean = true;
  loginForm: FormGroup;
  
  constructor(
    private router: Router,
    private authService: UsuarioService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['']);
    }    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.authService.saveLogguedUser(response.user);
          this.authService.saveRole(response.role);
          this.router.navigate(['']);
        },
        error: (error) => {
          this.loginForm.get('email')?.setErrors({ invalidPasswordOrEmail: true });
          this.loginForm.get('password')?.setErrors({ invalidPasswordOrEmail: true });
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
  onLoginSignupClick() {
    this.isLogin = !this.isLogin;
  }

  onSubmitSignup(form: SignupForm) {
    this.authService.signup(form).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.authService.saveLogguedUser(response.user);
        this.authService.saveRole(response.role);
        this.router.navigate(['']);
      },
      error: (error) => {
        this.snackbar.open(error.error, 'Fechar', {duration: 5000})
      }
    });
    
  }
}
