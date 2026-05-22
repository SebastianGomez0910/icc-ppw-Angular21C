import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SimpsonsService } from '../../service/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-simpson-page',
  imports: [RouterLink],
  templateUrl: './simpson-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonPage {

  private simpsonsService=inject(SimpsonsService);

  simpsonsResource=rxResource({
    stream: ()=>this.simpsonsService.getCharacters(1),
  });
}
