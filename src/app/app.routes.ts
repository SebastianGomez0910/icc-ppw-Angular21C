import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDatailPage } from './features/students/pages/student-datail-page/student-datail-page';

export const routes: Routes = [
    {
        path:'',
        component: HomePage
    },
    {
        path:'students',
        component: StudentsPage
    },
    {
        path:'students/:id',
        component: StudentDatailPage
    },
    {
        //ruta de redireccionamiento
        path: '**',
        redirectTo: ''
    }
];
