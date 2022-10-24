import { User } from './../../common/models/user';
import { Component } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { Router } from '@angular/router';
@Component({
    selector: "login",
    templateUrl: "../partials/login.component.html"
})
export class LoginComponent {
    user: User;
    data1: User;
    token: string;
    constructor(private us: UserService, private router: Router) {
        this.user = new User();
    }
    login() {
        this.us.loginUser(this.user).subscribe((data) => {
            if (data) {
                this.data1 = (data as any).user;
                this.token = (data as any).token;
                localStorage.setItem("id_token", this.token);
                this.router.navigate(['/itemList']);
            }
        })
    }

}