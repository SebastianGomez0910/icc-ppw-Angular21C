import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../signup/validators/password-match.validator';
import { emailUniqueValidator } from '../signup/validators/email-unique.validator';

@Component({
  selector: 'app-signup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {

  //emailControl= new FormControl('', 
    //[Validators.required, Validators.email] //validadores sincronos
  //);

  //get email(){
    //return this.emailControl;
  //}

  private fb= inject(FormBuilder);
  private router = inject(Router);

  form=this.fb.group(
    {
      email: ['', [Validators.email, Validators.required], [emailUniqueValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: passwordMatchValidator
    }
);
  

  get email(){
    return this.form.get('email')!;
  }

  get password(){
    return this.form.get('password')!;
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')!;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Datos del formulario listos para enviar:', this.form.value);
    
    this.router.navigate(['/']);
  }
}
