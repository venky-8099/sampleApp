import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs";
import { ItemService } from "../services/item.service";
import { ItemActionTypes, RetriveItemList, RetriveItemListSuccess } from "./item.action";


@Injectable()
export class ItemEffects{
    constructor(private actions: Actions, private itemService:ItemService){}

    getItemslist$ = createEffect(() => this.actions.pipe(
        ofType(ItemActionTypes.RetriveItemList),
        switchMap((action: RetriveItemList) => {
            return this.itemService.getItems()
                .pipe(
                    map((payload: any) => new RetriveItemListSuccess(payload))
                )
        })
    ))
}