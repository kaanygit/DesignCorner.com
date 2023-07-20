import { FetchProductsFailureAction, FetchProductsRequestAction, FetchProductsSuccessAction, PRODUCTS_DATA_TYPES, ProductData, SetProductsAction } from "./produts.types";


export const setProducts=(products:ProductData[]):SetProductsAction=>({
    type:PRODUCTS_DATA_TYPES.SET_PRODUCTS,
    payload:products
})

export const fetchProductsRequest =():FetchProductsRequestAction=>({
    type:PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess =(data:ProductData[]):FetchProductsSuccessAction=>({
    type:PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload:data,
})

export const fetchProductsFailure = (error:string):FetchProductsFailureAction=>({
    type:PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_FAILURE,
    error,
})