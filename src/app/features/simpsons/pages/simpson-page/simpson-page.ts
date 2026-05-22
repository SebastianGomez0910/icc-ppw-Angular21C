import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SimpsonsService } from '../../service/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink, RouterModule } from "@angular/router";
import { PaginationServiceTs } from '../../../../shared/service/pagination.service.ts';

@Component({
  selector: 'app-simpson-page',
  imports: [RouterLink, RouterModule],
  templateUrl: './simpson-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonPage {

  private simpsonsService=inject(SimpsonsService);
  paginationService=inject(PaginationServiceTs);

  readonly charactersPerPage=signal(10);

  simpsonsResource=rxResource({

    params:()=>({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),
    stream:({ params })=>
      this.simpsonsService.getCharactersOptions({
        page:params.page,
        limit:params.limit,
      }),
  });
}
