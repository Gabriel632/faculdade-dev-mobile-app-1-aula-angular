import { Component } from "@angular/core";
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'app-pessoa-add',
    templateUrl: './pessoa-add-page.component.html',
    styleUrl: './pessoa-add-page.component.css'
})
export class PessoaAddPage {    
    pessoas: Pessoa[] = [];
    pessoa: Pessoa = {
        nome: "",
        idade: 0,
        cpf: ""
    };

    salvar() {
        console.log("salvando pessoa " + this.pessoa.nome);
        console.log(this.pessoa)
    }
}