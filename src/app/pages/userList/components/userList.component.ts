import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../common/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../common/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'userList',
    templateUrl: '../partials/userList.component.html'
})

export class UserListComponent implements OnInit {
    users:Observable<User[]>
    constructor(private us:UserService,private router:Router) { 
        this.users = <Observable<User[]>>this.us.listUsers();
    }
    delete(userId: any){
        this.us.deleteUser(userId).subscribe((data)=>{
            if(data){
                this.users = <Observable<User[]>>this.us.listUsers();
            }
        })
    }
    logout(){
        localStorage.removeItem("id_token");
        this.router.navigate(['/login']);
    }

    ngOnInit() { }
}