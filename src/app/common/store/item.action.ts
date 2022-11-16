import { Action } from "@ngrx/store";

export enum ItemActionTypes {
    RetriveItemList = '[Item Retrive Item List]',
    RetriveItemListSuccess = '[Item Retrive Item List Success]'
}

export class RetriveItemList implements Action {
    readonly type: ItemActionTypes.RetriveItemList;

    constructor(){}
}

export class RetriveItemListSuccess implements Action {
    readonly type: ItemActionTypes.RetriveItemListSuccess;
    
    constructor(public payload:any){}
}

export type ItemTypes = RetriveItemList | RetriveItemListSuccess;


