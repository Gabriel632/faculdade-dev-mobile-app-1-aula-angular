import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn: 'root'})
export class ClientGuard {

    constructor(private route: Router) {

    }

    canActivate(): boolean {
        if (localStorage.getItem("logado") === "true") {
            return true;
        } else {
            this.route.navigate(['login'])
            return false;
        }
    }
}

const canActivateClient: CanActivateFn = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot, 
) => {
    return inject(ClientGuard).canActivate();
};
