import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    title = 'app-header';

    @Input()
    descricao1 = ''; //parâmetro vindo do componente pai (neste caso o app)

    @Output()
    onItemSelected = new EventEmitter();

    clickEmItem(value: string) {
        this.onItemSelected.next(value); //parâmetro enviado ao componente pai (neste caso o app)
    }

    funcaoQueVaiSerChamadaPeloPai() {
        alert('Função do componente filho chamada pelo pai, lembra o conceito de herança de Orientação a objeto');
    }
}