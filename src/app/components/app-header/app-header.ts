import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeader {
  readonly brand=signal("PPW-ANGULAR");
  readonly showInfo=signal(false);

  private authService = inject(AuthService);
  private router = inject(Router);

  // El signal del servicio: null = no autenticado, User = autenticado.
  currentUser = this.authService.currentUser;

  logout() {
    this.authService.logout().subscribe(() => {
      // Redirige al login despues de cerrar sesion.
      this.router.navigate(['/login']);
    });
  }

  //computed???
  readonly toggleLabel=computed(() => (this.showInfo()? 'Ocultar Info' : 'Mostrar Info'));

  changeBrand(): void{
    // Actualizar el valor de la senial brand
    this.brand.update((valor) => valor + '!')
    //concatenar al valor actual algo nuevo
  }

  resetBrand(): void{
    //poner algo totalmente nuevo
    this.brand.set("PPW-ANGULAR")
  }

  toggleInfo(){
    //actualiza el valor de showInfo
    this.showInfo.update((value)=>!value);
  }
}
