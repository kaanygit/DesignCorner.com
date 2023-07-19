import { CHECKOUT_ACTION_TYPES,DecreaseProductAction,DeleteProductAction,IncreaseProductAction,ProductDataCheckout, SetProductAction} from "./checkout.type";

export const setProduct=(product:ProductDataCheckout):SetProductAction=>({
    type:CHECKOUT_ACTION_TYPES.SET_PRODUCT,
    payload:product
});

export const removeProduct=(product:string):DeleteProductAction=>({
    type:CHECKOUT_ACTION_TYPES.DELETE_PRODUCT,
    payload:product
});

export const increaseProduct=( _id:string):IncreaseProductAction=>({
    type:CHECKOUT_ACTION_TYPES.INCREASE_PRODUCT,
    payload:_id
});

export const decreaseProduct=(_id:string):DecreaseProductAction=>({
    type:CHECKOUT_ACTION_TYPES.DECREASE_PRODUCT,
    payload:_id  
});

    