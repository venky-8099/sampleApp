import { Component } from "@angular/core";
import { User } from "../../common/models/user";
import { UserService } from "../../common/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "register",
    templateUrl: "../partials/register.component.html"
})
export class RegisterComponent {
    user: User;
    access:boolean=true;
    password2:string;    
    constructor(private us: UserService, private router: Router, private aRoute: ActivatedRoute) {
         this.user = new User();
    }
    register() {
        this.access = false;
        this.us.registerUser(this.user).subscribe((data) => {
            if (data) {
                alert("data inserted successfully");
                this.router.navigate(['/login']);
            }
        })
    }
}