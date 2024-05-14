import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/client";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form-page.component.html',
    styleUrl: './client-form-page.component.css'
})
export class ClientFormPage {

    constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder
    ) { }

    @Input()
    clientInput: Client = {
        id: 0,
        nome: '',
        descricao: '',
        idade: 0
    };

    ngOnChanges(changes: SimpleChanges) {
        const clientInput = changes['clientInput']?.currentValue;
        if (clientInput) {
            this.clientInput = clientInput;
            this.clientForm.patchValue({
                id: this.clientInput.id,
                nome: this.clientInput.nome,
                descricao: this.clientInput.descricao,
                idade: this.clientInput.idade
            });
        }
    }

    @Output()    
    onClickVoltarParaListagem = new EventEmitter();
    clickVoltarParaListagem() {
        const openClientForm = false;
        this.onClickVoltarParaListagem.next(openClientForm);
    }

    clientOutput: Client = {
        id: 0,
        nome: '',
        descricao: '',
        idade: 0
    };
    @Output()
    onSalvarDados = new EventEmitter();
    salvarDados() {      
        if (this.clientForm.valid) {
            this.clientOutput = this.formToValue(this.clientForm);
            this.onSalvarDados.next(this.clientOutput);
        } else {
            alert("Formulário inválido, preencha todos os campos obrigatórios");
        }          
    }

    clientForm = this.formBuilder.group({
        id: [this.clientInput.id],
        nome: [this.clientInput.nome],
        descricao: [this.clientInput.descricao],
        idade: [this.clientInput.idade]
    }
    );
    
    formToValue(form: typeof this.clientForm): Client {
        return {
            id: form.value.id!,
            nome: form.value.nome!,
            descricao: form.value.descricao!,
            idade: form.value.idade!,
        };
    }

    // mantido aqui apenas para exemplo de uso de service, mas irrelevante para o código montado
    sayHello() {
        alert(this.clientService.sayHello());
    }
}