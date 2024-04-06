import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details-page.component.html',
    styleUrl: './client-details-page.component.css'
})
export class ClientDetailsPage {
    constructor(
        private route: ActivatedRoute
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
        let id = this.route.snapshot.paramMap.get('id')!;
        this.client.id = +id;
    }
}