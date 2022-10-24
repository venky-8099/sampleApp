import { Component } from "@angular/core";
import { Item } from "../../../common/models/item";
import { Observable } from "rxjs";
import { ItemService } from "../../../common/services/item.service";

@Component({
    selector:"addItem",
    templateUrl:"../partials/addItem.component.html"
})


export class AddItemComponent {
    addItem:Item;
    items:Observable<Item[]>;
    showAddForm:boolean =false;
    constructor(private IS:ItemService){
        this.items = <Observable<Item[]>>this.IS.getItems();
        this.addItem = new Item();
    }
    addNewItem(){
        this.showAddForm = !this.showAddForm;
    }

}