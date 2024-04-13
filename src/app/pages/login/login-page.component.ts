import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPage {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    getStorage(key: string): any {
        if (this.storage) {
          return this.storage.getItem(key);
        }
        return false;
    }

    logar() {
        this.storage.setItem('logado', 'true');
    }

    deslogar() {
        this.storage.setItem('logado', 'false');
    }
}