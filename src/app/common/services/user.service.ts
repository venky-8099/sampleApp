import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http:HttpClient) { }

    registerUser(user:User){
        return this.http.post("http://localhost:3200/api/registerUser",user);
    }
    listUsers():Observable<User[]>{
        return this.http.get<User[]>("http://localhost:3200/api/listusers");
    }
    editUser(id:number){
        return this.http.get("http://localhost:3200/api/editUser/"+id);
    }
    updateUser(user:User){
        return this.http.put("http://localhost:3200/api/updateUser",user);
    }
    deleteUser(id:number){
        return this.http.delete("http://localhost:3200/api/deleteUser/"+id);
    }
    loginUser(user:User){
        return this.http.post("http://localhost:3200/api/loginUser",user);
    }
    
}