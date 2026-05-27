import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDatailPage } from './features/students/pages/student-datail-page/student-datail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './components/ui-components-page/ui-components-page';
import { SimpsonPage } from './features/simpsons/pages/simpson-page/simpson-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';

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
        path: 'project-config',
        component: ProjectConfigPage
    },
    {
        path:'ui-components',
        component: UiComponentsPage
    },
    {
        path: 'simpsons',
        component: SimpsonPage
    },
    {
        path: 'simpsons/:id',
        component: SimpsonDetailPage
    },
    {
        path: 'auth',
        component: AuthPage
    },
    {
        //ruta de redireccionamiento
        path: '**',
        redirectTo: ''
    }
];
