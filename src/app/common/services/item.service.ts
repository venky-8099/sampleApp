import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ItemService{
    sub$ = new Subject<any>();
    constructor(private http:HttpClient){
        
    }
    addItem(item:Item){
        return this.http.post("http://localhost:3200/api/addItem",item);
    }
    getItems(){
        return this.http.get("http://localhost:3200/api/listitems");
    }
}