import { CHECKOUT_ACTION_TYPES } from "./checkout.type";

export const setProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.SET_PRODUCT,
    payload:product
});

export const removeProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.DELETE_PRODUCT,
    payload:product
});

export const increaseProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.INCREASE_PRODUCT,
    payload:product
});

export const decreaseProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.DECREASE_PRODUCT,
    payload:product
});

    