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
    items:any;
    showAddForm: boolean = false;
    totalCost:Number;
    public minDate: Date = new Date ("05/07/2017");
    public maxDate: Date = new Date ("05/27/2017");
    public dateValue: Date = new Date ("05/16/2017");
    constructor(private iService: ItemService, private router: Router) {
        // this.items = <Observable<Item[]>>this.iService.getItems();
        this.iService.getItems().subscribe((data) =>{
            this.items = data;
            this.iService.sub$.next(this.items);
        });
        
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
                this.items = this.iService.getItems();
                this.iService.sub$.next(this.items);
            }
        })
    };
    addThis(x:any,y:any){
        return x && y ? parseInt(x)*parseInt(y) : '';
    }

}