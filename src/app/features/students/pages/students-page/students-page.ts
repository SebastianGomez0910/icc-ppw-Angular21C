import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students=signal([
    {id: 1, name: "Juan Perez"},
    {id: 2, name: "Carlos Daniel"},
    {id: 3, name: "Maria Jose"},
    {id: 4, name: "Ana Maria"},
    {id: 5, name: "Jorge David"},
  ])
  
}
