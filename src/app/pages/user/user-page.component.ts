import { Component } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.css'
})
export class UserPage {    
    users: User[] = [];

    constructor (private service: UserService) {}

    ngOnInit() {
        this.service.getUsers()
            .subscribe((users) => this.users = users);
    }

    editar(user: User) {
        const editado = user;
        editado.name = editado.name + ' editado!';
        this.service.putUser(editado.id, editado);
    }

    novoUser(){
        const novoUser: User = {
            id: 222,
            name: "Teste",
            email: "teste@teste.com",
            gender: "male",
            status: "active"
        };
        this.service.postUser(novoUser);
    }

    deletar(id: number){
        this.service.deleteUser(id);
    }

    ngOnDestroy() {
    }
}