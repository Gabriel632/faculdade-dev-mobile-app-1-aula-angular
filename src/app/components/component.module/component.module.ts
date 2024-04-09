import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header.component/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ClientListPage } from "../../pages/client-list/client-list-page.component";
import { CurrencyPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientDetailsPage } from "../../pages/client-details/client-details-page.component";
import { BindingPage } from "../../pages/binding/binding-page.component";
import { CustomUpperCasePipe } from "../pipes/custom-uppercase-pipe";

// acredito que o conceito de módulos está sendo depreciado no angular padrão por ser usado somente em projetos realmente muito grandes
@NgModule({
    declarations: [
        HeaderComponent, 
        ClientListPage, 
        ClientDetailsPage,
        BindingPage        
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
    ]
})  
export class ComponentModule {
}