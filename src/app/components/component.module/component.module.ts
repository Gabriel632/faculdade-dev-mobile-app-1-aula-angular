import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header.component/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ClientListPage } from "../../pages/client-list/client-list-page.component";
import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientDetailsPage } from "../../pages/client-details/client-details-page.component";

// acredito que o conceito de módulos está sendo depreciado no angular padrão por ser usado somente em projetos realmente muito grandes
@NgModule({
    declarations: [
        HeaderComponent, 
        ClientListPage, 
        ClientDetailsPage
    ],
    imports: [
        RouterModule,
        RouterOutlet,
        NgIf, 
        NgFor, 
        FormsModule
    ],
    exports: [
        HeaderComponent, 
        ClientListPage, 
        ClientDetailsPage,
        RouterModule,
        RouterOutlet
    ]
})  
export class ComponentModule {
}