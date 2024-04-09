import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details-page.component.html',
    styleUrl: './client-details-page.component.css'
})
export class ClientDetailsPage implements OnInit {
    constructor(
        private activeRoute: ActivatedRoute
    ) {}

    client: {
        nome: string,
        descricao: string,
        id: number
    } = {
        nome: '',
        descricao: '',
        id: 0
    }

    ngOnInit() {
        this.activeRoute.params.subscribe(routeParams => {
            this.loadDetail(+routeParams['id']);
        });
    }

    loadDetail(id: number) {
        this.client.id = id;
    }
}