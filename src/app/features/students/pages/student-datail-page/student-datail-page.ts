import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-datail-page',
  imports: [RouterLink],
  templateUrl: './student-datail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDatailPage {
  
  //permite leer los paramatros de la ruta que definimos en app.routes.ts 
  private route = inject(ActivatedRoute);

  readonly id = this.route.snapshot.paramMap.get('id');
}
