import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeader {
  readonly brand=signal("PPW-ANGULAR");
  readonly showInfo=signal(false);

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
