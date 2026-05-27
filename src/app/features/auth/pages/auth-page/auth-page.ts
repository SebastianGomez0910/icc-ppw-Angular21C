import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  private fb=inject(FormBuilder);
  private authService=inject(AuthService);
  private router=inject(Router);


  isLogin=signal(true);

  errorMessage=signal<string | null>(null);
  isLoading=signal(false);

  authForm=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });

  toggleMode(){
    this.isLogin.update((v) => !v);
    this.errorMessage.set(null);
    this.authForm.reset();
  }

  onSubmit(){
    if(this.authForm.invalid)return;

    const{email, password}= this.authForm.value;
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const action$ =this.isLogin()
      ? this.authService.login(email!, password!)
      : this.authService.register(email!, password!);

      action$.subscribe({
        next: () =>{
          this.router.navigate(['/']);
        },
        error: () => {
        this.errorMessage.set(
          this.isLogin()
            ? 'Correo o contrasena incorrectos.'
            : 'No se pudo crear la cuenta. El correo puede estar en uso.'
        );
        this.isLoading.set(false);
      },
    });
  }

  async loginWithGoogle() {
    try {
      const result = await this.authService.loginWithGoogle();
      console.log('Usuario autenticado con Google:', result.user);
      // Aquí puedes redirigir al usuario o actualizar el estado de sesión
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }
}
