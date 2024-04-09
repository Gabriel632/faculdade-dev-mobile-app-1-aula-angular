// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ClientService {
    
    // constructor(private httpRequest: HttpClient) {

    // }

    sayHello() {
        return "Hello";
    }
}