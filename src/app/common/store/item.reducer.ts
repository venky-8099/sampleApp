import { ItemActionTypes } from "./item.action";


export function ItemListReducer(state:any, action:any){
    switch(action.type) {
        case ItemActionTypes.RetriveItemListSuccess: {
            return {
                ...action.payload
            }
        }
        default: return state;
    }
}

interface ItemState {
    ItemList:any
}

export const getItemList = (state: ItemState) => state.ItemList;