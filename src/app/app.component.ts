import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentModule } from './components/component.module/component.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './components/header.component/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ComponentModule, 
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'descrição do item 1';
  descricao2 = 'descrição do item 2';  
  parametroVindoDoFilho = ''; // parametro vindo de componente filho (neste caso do header)  

  @ViewChild('filho')
  filho!: HeaderComponent;

  chamarFuncaoFilho(){
    this.filho.funcaoQueVaiSerChamadaPeloPai();
  }
}
