import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentModule } from './components/component.module/component.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ComponentModule, 
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'descrição do item 1';
  descricao2 = 'descrição do item 2';    
}
