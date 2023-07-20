import { Action } from "redux";

export enum PRODUCTS_DATA_TYPES{
    SET_PRODUCTS = 'SET_PRODUCTS',
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}
export interface ProductData{
    "_id":string;
    "key":number;
    "name":string;
    "imageUrl":string;
    "price":number;
    "discountRate":number;
    "productInformation":string;
    "_v":number;
    count:number;
    productId:string;
}

export interface SetProductsAction {
    type:PRODUCTS_DATA_TYPES.SET_PRODUCTS,
    payload:ProductData[]
}
export interface FetchProductsRequestAction extends Action<PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_REQUEST>{};
export interface FetchProductsSuccessAction extends Action<PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_SUCCESS>{
    payload:ProductData[]
};
export interface FetchProductsFailureAction  extends Action<PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_FAILURE>{
    error:string;
};

export type ProductActionTypes =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | SetProductsAction;