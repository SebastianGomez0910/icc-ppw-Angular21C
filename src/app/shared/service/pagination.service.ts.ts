import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationServiceTs {
  private activatedRoute=inject(ActivatedRoute);

  currentPage=toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map(params =>
        Number(params.get('page')??'1')
      )
    ),
    {
      initialValue:1
    }
  );
}
