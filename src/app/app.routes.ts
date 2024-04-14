import { Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list/client-list-page.component';
import { ClientDetailsPage } from './pages/client-details/client-details-page.component';
import { BindingPage } from './pages/binding/binding-page.component';
import { ClientGuard } from './guards/client.guard';
import { LoginPage } from './pages/login/login-page.component';
import { RxJsPage } from './pages/rxjs/rxjs-page.component';
import { PessoaListPage } from './pages/pessoa-list/pessoa-list-page.component';

export const routes: Routes = [
    {path: 'client', component: ClientListPage, canActivate: [ClientGuard], children: [
        {path: 'details/:id', component: ClientDetailsPage}
    ]},
    {path: 'binding', component: BindingPage},
    {path: 'login', component: LoginPage},
    {path: 'rxjs', component: RxJsPage},
    {path: 'pessoa', component: PessoaListPage}
];
