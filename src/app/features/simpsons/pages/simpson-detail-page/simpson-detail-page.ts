import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../service/simpsons.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SimpsonsCacheService } from '../../service/simpsons-cache.service';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-simpson-detail-page',
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPage {

  private route=inject(ActivatedRoute);
  private simpsonsService=inject(SimpsonsService);

  private cacheService=inject(SimpsonsCacheService);

  private characterId=Number(
    this.route.snapshot.paramMap.get('id')
  )

  characterResource = rxResource({
    stream: () => {

      const cached = this.cacheService.getById(this.characterId);

      if (cached) {
        return of(cached);
      }

      return this.simpsonsService
        .getCharacterById(this.characterId)
        .pipe(

          tap((character) =>
            this.cacheService.save(character)
          )
        );
    },
  });

}
