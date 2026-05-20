import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDatailPage } from './features/students/pages/student-datail-page/student-datail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';

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
        path:'layouts',
        component:LayoutsPage
    },
    {
        path: 'signup',
        component:SignupPage
    },
    {
        path: 'profile',
        component: ProfilePage
    },
    {
        //ruta de redireccionamiento
        path: '**',
        redirectTo: ''
    }
];
