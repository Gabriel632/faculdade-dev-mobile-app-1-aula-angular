import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    templateUrl: './binding-page.component.html',
    styleUrl: './binding-page.component.css'
})
export class BindingPage {
    imagem = "../../../favicon.ico";
    width = "60px";
    sucesso = true;
    data = new Date();
    dinheiro = 100;
    nome = 'José Mario De Nobrega Noruega Gurrero';

    enviarDados() {
        this.sucesso = !this.sucesso;
    }
}