import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details-page.component.html',
    styleUrl: './client-details-page.component.css'
})
export class ClientDetailsPage implements OnInit, OnDestroy {
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

    subscription!: Subscription;

    ngOnInit() {
        this.activeRoute.params.subscribe(routeParams => {
            this.loadDetail(+routeParams['id']);
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();   
        }        
    }

    loadDetail(id: number) {
        this.client.id = id;
    }
}