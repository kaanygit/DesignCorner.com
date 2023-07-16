import { CHECKOUT_ACTION_TYPES } from "./checkout.type";

export const setProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.SET_PRODUCT,
    payload:product
});

export const removeProduct=(product)=>({
    type:CHECKOUT_ACTION_TYPES.DELETE_PRODUCT,
    payload:product
})

    