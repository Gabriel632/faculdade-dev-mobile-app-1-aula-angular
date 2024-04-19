import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrl: './user-add.component.css'
})
export class UserAddPage {
    constructor (private formBuilder: FormBuilder) {}

    userForm = this.formBuilder.group({
        name: [''],
        email: [''],
        gender: ['']
    });

    salvar() {
        if (this.userForm.valid) {
            console.log("salvando user...");
            console.log(this.userForm.value)
        } else {
            alert("Formulário inválido");
        }        
    }
} 