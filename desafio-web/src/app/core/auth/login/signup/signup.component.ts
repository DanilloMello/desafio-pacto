import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { SignupForm } from '../../../modal/signupform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass',
  standalone: false
})
export class SignupComponent {

  @Output() switchToLogin = new EventEmitter<void>();
  @Output() submitSignup = new EventEmitter<SignupForm>();
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: UsuarioService
  ) {
   
      this.signupForm = this.fb.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        apresentacao: [''],
        habilidades: [''],
        mesesExperiencia: [null],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        userType: ['candidato', [Validators.required]]
      }, { validators: this.passwordMatchValidator });
    
    this.signupForm.get('userType')?.valueChanges.subscribe(value => {
      this.updateFormBasedOnUserType(value);
    });

    // Initialize form based on default userType
    this.updateFormBasedOnUserType(this.signupForm.get('userType')?.value);

  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onClickToLogin() {
    this.switchToLogin.emit();
  }

  onSubmit() {
    if (this.signupForm.valid) {

      const tempoGroup = this.signupForm.get('tempoExperiencia') as FormGroup;

      const signupFormHandled: SignupForm = {
        nome: this.signupForm.value.nome,
        email: this.signupForm.value.email,
        senha: this.signupForm.value.password,
        apresentacao: this.signupForm.value.apresentacao,
        habilidades: this.signupForm.value.habilidades,
        mesesExperiencia: this.signupForm.value.mesesExperiencia,
        userType: this.signupForm.value.userType
      };
      this.submitSignup.emit(signupFormHandled)
    }
    else 
      this.signupForm.markAllAsTouched();
  }

  private updateFormBasedOnUserType(userType: string) {
  const habilidadesControl = this.signupForm.get('habilidades');
  const apresentacaoControl = this.signupForm.get('apresentacao');
  const mesesExperienciaControl = this.signupForm.get('mesesExperiencia');

  if (userType === 'empresa') {
    habilidadesControl?.clearValidators();
    habilidadesControl?.setValue(null);
    apresentacaoControl?.clearValidators();
    apresentacaoControl?.setValue(null);
    mesesExperienciaControl?.clearValidators();
    mesesExperienciaControl?.setValue(null);
  } else if (userType === 'candidato') {
    apresentacaoControl?.setValidators([Validators.required]);
    habilidadesControl?.setValidators([Validators.required]);
    mesesExperienciaControl?.setValidators([Validators.required, Validators.min(0)]);
  }

  apresentacaoControl?.updateValueAndValidity();
  habilidadesControl?.updateValueAndValidity();
  mesesExperienciaControl?.updateValueAndValidity();
}

}