import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../../components/modal.component/modal.component";

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

    constructor(public dialog: MatDialog) {}

    enviarDados() {
        this.sucesso = !this.sucesso;
    }
    
    // dados Modal angular material
    animal: string | null = null;
    
    openDialog(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            data: {name: "TESTE", animal: this.animal},
        });

        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
        });
    }

    //dados Tabela angular material
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
}

//dados Tabela angular material
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];