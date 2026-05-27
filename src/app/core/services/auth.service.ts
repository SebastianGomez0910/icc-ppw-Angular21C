import { inject, Injectable } from '@angular/core';
import { authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);


  currentUser = toSignal(authState(this.auth));


  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }

   async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }
}