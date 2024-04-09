import { Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list/client-list-page.component';
import { ClientDetailsPage } from './pages/client-details/client-details-page.component';
import { BindingPage } from './pages/binding/binding-page.component';

export const routes: Routes = [
    {path: 'client', component: ClientListPage, children: [
        {path: 'details/:id', component: ClientDetailsPage}
    ]},
    {path: 'binding', component: BindingPage}
];
