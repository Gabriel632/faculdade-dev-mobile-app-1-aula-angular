import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";
import { ActivatedRoute } from "@angular/router";
import { validateCPF, validateDate } from "../../components/validators/validadores";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.css'
})
export class UserFormPage {
    constructor (
        private formBuilder: FormBuilder, 
        private service: UserService,
        private activateRoute: ActivatedRoute
    ) {}

    userForm = this.formBuilder.group({
        id: this.formBuilder.control<number | null>(null),
        name: ['', Validators.required],
        email: ['', Validators.compose([
            Validators.required, 
            Validators.email
        ])],
        gender: [''],
        cpf: ['', Validators.compose([
            Validators.required,
            validateCPF()
        ])],
        birthDate: [''],
        actualDate: ['']
    },
    {
        validators: [validateDate()]
    }
    );

    ngOnInit() {
        const id = this.activateRoute.snapshot.paramMap.get('id');
        if (id) {
            this.userForm.patchValue(this.service.getUsersLocalStorage(id));
        }
    }

    salvar() {
        if (this.userForm.valid) {
            if (this.userForm.value.id) {
                console.log("editando user...");
                this.service
                .putUser(
                    this.userForm.value.id,
                    this.formToValue(this.userForm)
                )
                .subscribe((u) => 
                    alert(`user ${u.name} editado com sucesso`)
                );
            } else {
                console.log("salvando user...");
                this.service
                .postUser(
                    this.formToValue(this.userForm)
                )
                .subscribe((u) => 
                    alert(`user ${u.name} salvo com sucesso`)
                );
            }            
        } else {
            alert("Formulário inválido");
        }        
    }

    formToValue(form: typeof this.userForm): User {
        return {
            id: form.value.id!,
            name: form.value.name!,
            email: form.value.email!,
            gender: form.value.gender!,
            cpf: form.value.cpf!,
            // dados fora do form, mock
            status: '',
        };
    }

    isError(control: 'name' | 'email' | 'gender' | 'cpf', validator: string) {
        return this.userForm.controls[control].getError(validator) ? true : false;
    }

    isFormError(validator: string) {
        return this.userForm.getError(validator) ? true : false;
    }
} 