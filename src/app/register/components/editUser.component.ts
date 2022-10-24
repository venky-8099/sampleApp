import { Component } from "@angular/core";
import { User } from "../../common/models/user";
import { UserService } from "../../common/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "edituser",
    templateUrl: "../partials/edituser.component.html"
})
export class EditUserComponent {
    user: User;
    
    constructor(private us: UserService, private router: Router, private aRoute: ActivatedRoute) {
        this.user = new User();
        let userId = this.aRoute.snapshot.params['userId'];
        if (userId) {
            this.us.editUser(userId).subscribe((data) => {
                if (data) {
                    this.user = <User>data;
                }
            })
        }
    }
    update() {
        this.us.updateUser(this.user).subscribe((data) => {
            if (data) {
                this.router.navigate(['/userList']);
            }
        })
    }
}