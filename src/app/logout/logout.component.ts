import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"logout",
    templateUrl:"logout.component.html"
})
export class LogoutComponent{
    constructor(private router:Router){}
    logoutAction(){
            localStorage.removeItem("id_token");
            this.router.navigate(['/login']);
    }
}