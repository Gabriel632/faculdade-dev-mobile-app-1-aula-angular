import { Component } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/client";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html',
    styleUrl: './client-list-page.component.css'
})
export class ClientListPage {

    constructor(private clientService: ClientService) { }

    premiumClient = false;
    
    // Dados para input em classe filha
    clientToForm: Client = {
        id: 0,
        nome: '',
        descricao: '',
        idade: 0
    };

    // Dados vindos de Output de classe filha
    openClientForm = false;
    clientFromForm: Client = {
        id: 0,
        nome: '',
        descricao: '',
        idade: 0
    };

    // start data
    clientes :Client[] = [
        {
            id: 1,
            nome: 'Amélia',
            descricao: 'Criança',
            idade: 20
        },
        {
            id: 2,
            nome: 'Laputa',
            descricao: 'Cidade',
            idade: 2000
        }
    ];

    openClientFormToAdd(value: boolean) {
        this.openClientForm = value;
        this.clientToForm = {
            id: 0,
            nome: '',
            descricao: '',
            idade: 0
        };
    }

    openClientFormToUpdate(clientToForm: Client) {
        this.openClientForm = true;
        this.clientToForm = clientToForm;
    }

    handleClientFormReturn(clientFromFormReturned: Client) {
        console.log(clientFromFormReturned)
        this.clientFromForm = clientFromFormReturned;

        if (this.clientFromForm.id === 0) {
            this.adicionar();
        }else{
            this.atualizar();
        }
    }

    adicionar() {
        let maxClientId = Math.max.apply(null,
            this.clientes.map(function (c) { return c.id; }));
        let newId = maxClientId + 1;

        this.clientFromForm.id = newId;

        this.clientes.push(this.clientFromForm);
    }

    atualizar() {
        const index = this.clientes.findIndex(c => c.id === this.clientFromForm.id);
        this.clientes[index] = this.clientFromForm;
    }

    remover(id: number) {
        const index = this.clientes.findIndex(c => c.id === id);
        this.clientes.splice(index, 1);
    }

    sayHello() {
        alert(this.clientService.sayHello());
    }
}