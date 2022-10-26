import { Component, DoCheck } from "@angular/core";
import { ItemService } from "../../common/services/item.service";

@Component({
    selector:'item-count',
    templateUrl:"item-count.html"
})

export class ItemCount implements DoCheck{
    count:any;
    constructor(private iService: ItemService){
        
    }
    ngDoCheck() {
        this.iService.sub$.subscribe((data) =>{
            console.log('data from count', data);
        })
    }


}