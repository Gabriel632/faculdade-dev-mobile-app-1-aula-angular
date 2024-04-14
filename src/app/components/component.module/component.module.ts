import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header.component/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ClientListPage } from "../../pages/client-list/client-list-page.component";
import { CurrencyPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientDetailsPage } from "../../pages/client-details/client-details-page.component";
import { BindingPage } from "../../pages/binding/binding-page.component";
import { CustomUpperCasePipe } from "../pipes/custom-uppercase-pipe";
import { LoginPage } from "../../pages/login/login-page.component";
import { RxJsPage } from "../../pages/rxjs/rxjs-page.component";
import { PessoaListPage } from "../../pages/pessoa-list/pessoa-list-page.component";
import { PessoaService } from "../../services/pessoa.service";

@NgModule({
    declarations: [
        HeaderComponent, 
        ClientListPage, 
        ClientDetailsPage,
        BindingPage,
        LoginPage,
        RxJsPage,
        PessoaListPage
    ],
    providers: [
        PessoaService
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
    ]
})  
export class ComponentModule {
}