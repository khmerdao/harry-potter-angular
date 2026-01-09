import { Routes } from '@angular/router';
import { Characters } from './components/characters/characters';
import { Home } from './core/home/home';
import { Staff } from './components/staff/staff';

export const routes: Routes = [
    // { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: '', component: Home},
    // { path: 'characters', component: Characters },
    // { path: 'characters', loadComponent: () => Characters },
    { 
        path: 'characters', 
        loadComponent: () => import('./components/characters/characters').then(Component => Component.Characters),
        title: "Liste des Personnages",
        data: {
            section: "Harry Potter",
            breadcrumb: Characters,
        }
    },
    // { path: 'characters/:id', component: CharacterDetailComponent },
    // { path: '**', redirectTo: 'characters' },
    {
        path: 'staff',
        title: "Staff",
        component: Staff,
    }
];
