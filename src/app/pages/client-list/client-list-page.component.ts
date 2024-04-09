import { Component } from "@angular/core";
import { ClientService } from "../../services/client.service";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html',
    styleUrl: './client-list-page.component.css'
})
export class ClientListPage {

    constructor(private clientService: ClientService) {

    }

    premiumClient = false;

    clientes = [
        {
            nome: 'Amélia',
            descricao: 'Criança',
            id: 1
        },
        {
            nome: 'Laputa',
            descricao: 'Cidade',
            id: 2
        }
    ];

    client: {
        nome: string,
        descricao: string,
        id: number
    } = {
        nome: 'Amélia',
        descricao: 'Criança',
        id: 1
    }

    adicionar() {
        this.clientes.push(
            {
                nome: this.client.nome,
                descricao: this.client.descricao,
                id: this.client.id
            }
        )
    }

    sayHello() {
        alert(this.clientService.sayHello());
    }
}