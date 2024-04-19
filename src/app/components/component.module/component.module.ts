import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header.component/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ClientListPage } from "../../pages/client-list/client-list-page.component";
import { CurrencyPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientDetailsPage } from "../../pages/client-details/client-details-page.component";
import { BindingPage } from "../../pages/binding/binding-page.component";
import { CustomUpperCasePipe } from "../pipes/custom-uppercase-pipe";
import { LoginPage } from "../../pages/login/login-page.component";
import { RxJsPage } from "../../pages/rxjs/rxjs-page.component";
import { PessoaListPage } from "../../pages/pessoa-list/pessoa-list-page.component";
import { PessoaService } from "../../services/pessoa.service";
import { UserPage } from "../../pages/user/user-page.component";
import { UserService } from "../../services/user.service";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PessoaAddPage } from "../../pages/pessoa-add/pessoa-add-page.component";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserAddPage } from "../../pages/user-add/user-add.component";

@NgModule({
    declarations: [
        HeaderComponent, 
        ClientListPage, 
        ClientDetailsPage,
        BindingPage,
        LoginPage,
        RxJsPage,
        PessoaListPage,
        UserPage,
        PessoaAddPage,
        UserAddPage
    ],
    providers: [
        PessoaService,
        UserService        
    ],
    imports: [
        RouterModule
        ,RouterOutlet
        ,NgIf
        ,NgFor 
        ,FormsModule
        ,DatePipe
        ,CurrencyPipe    
        ,CustomUpperCasePipe
        ,MatMenuModule
        ,MatButtonModule
        ,MatInputModule
        ,MatSelectModule  
        ,ReactiveFormsModule
    ],
    exports: [
        HeaderComponent 
        ,ClientListPage 
        ,ClientDetailsPage
        ,RouterModule
        ,RouterOutlet
        ,BindingPage
        ,LoginPage
        ,RxJsPage
        ,PessoaListPage
        ,UserPage
        ,PessoaAddPage
        ,UserAddPage
    ]
})  
export class ComponentModule {
}