import { Component } from "@angular/core";
import { Item } from "../../../common/models/item";
import { Observable } from "rxjs";
import { ItemService } from "../../../common/services/item.service";
import { Router } from "@angular/router";

@Component({
    selector: "item-list",
    templateUrl: "../partials/itemList.component.html"
})


export class ItemListComponent {
    addItem: Item;
    items: Observable<Item[]>;
    showAddForm: boolean = false;
    totalCost:Number;
    public minDate: Date = new Date ("05/07/2017");
    public maxDate: Date = new Date ("05/27/2017");
    public dateValue: Date = new Date ("05/16/2017");
    constructor(private iService: ItemService, private router: Router) {
        this.items = <Observable<Item[]>>this.iService.getItems();
        this.addItem = new Item();
    }
    showAddFormFun() {
        this.showAddForm = !this.showAddForm;
    }
    addNewItem() {
        this.iService.addItem(this.addItem).subscribe((data) => {
            if (data) {
                this.showAddForm = !this.showAddForm;
                this.addItem = new Item();
                this.items = <Observable<Item[]>>this.iService.getItems();
            }
        })
    };
    addThis(x:any,y:any){
        return x && y ? parseInt(x)*parseInt(y) : '';
    }

}