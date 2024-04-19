import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";

const baseURL = 'https://gorest.co.in/public/v2/users';

@Injectable()
export class UserService {
    constructor (private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(baseURL);
    }

    postUser(user: User) {
        this.http.post(baseURL, user)
        .subscribe(
            {
                next: (data) => {
                    console.log('Salvo')
                    console.log(data)
                },                
                error: (erro) => {
                    console.error(erro)
                }
            }
        );
    }

    putUser(id: number, user: User) {
        this.http.put(`${baseURL}/${id}`, user)
        .subscribe(
            {
                next: (data) => {
                    console.log('Atualizado')
                    console.log(data)
                },                
                error: (erro) => {
                    console.error(erro)
                }
            }
        );
    }

    deleteUser(id: number) {
        this.http.delete(`${baseURL}/${id}`)
        .subscribe(
            {
                next: (data) => {
                    console.log('Deletado')
                    console.log(data)
                },                
                error: (erro) => {
                    console.error(erro)
                }
            }
        );
    }
}