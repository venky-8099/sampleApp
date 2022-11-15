import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService{
    constructor(private http:HttpClient){}
    addItem(item:Item){
        return this.http.post("http://localhost:3200/api/addItem",item);
    }
    getItems():Observable<Item[]>{
        return this.http.get<Item[]>("http://localhost:3200/api/listitems");
    }
}