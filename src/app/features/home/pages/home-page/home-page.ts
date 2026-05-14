import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "../../../../components/app-hero/app-hero";
import { Route, Router } from '@angular/router';
import { StudentsPage } from '../../../students/pages/students-page/students-page';

@Component({
  selector: 'app-home-page',
  imports: [Hero, StudentsPage],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  
  //esta es otra manera de navegar de navegar distnti a usar lo de html
  constructor(private router: Router){}
  
  goToStudentsPage(){
    this.router.navigate(['/students']);
  }
}
