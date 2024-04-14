import { Component } from "@angular/core";
import { PessoaService } from "../../services/pessoa.service";
import { Observable, Subscription, tap } from "rxjs";
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list-page.component.html',
    styleUrl: './pessoa-list-page.component.css'
})
export class PessoaListPage {    
    pessoas: Pessoa[] = [];

    constructor (private service: PessoaService) {}

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    salvar() {
    }

    listar() {
        this.service.listar()
            .subscribe((pessoas) => this.pessoas = pessoas);
    }
}