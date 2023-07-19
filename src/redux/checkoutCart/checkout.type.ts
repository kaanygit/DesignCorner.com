export enum CHECKOUT_ACTION_TYPES{
    SET_PRODUCT='SET_PRODUCT',
    DELETE_PRODUCT='DELETE_PRODUCT',
    INCREASE_PRODUCT='INCREASE_PRODUCT',
    DECREASE_PRODUCT='DECREASE_PRODUCT'
};


export interface ProductDataCheckout{
    count:number;
    discountRate:number;
    imageUrl:string;
    key:number;
    name:string;
    price:number;
    productInformation:string;
    _v:number;
    _id:string;
    productId:string;
}

export interface productsInterfaceRootTS{
    products:{
        products:ProductDataCheckout[]
    }
}

export interface SetProductAction{
    type: typeof CHECKOUT_ACTION_TYPES.SET_PRODUCT;
    payload:ProductDataCheckout;
}
export interface DeleteProductAction{
    type: typeof CHECKOUT_ACTION_TYPES.DELETE_PRODUCT;
    payload: string;
}
export interface IncreaseProductAction{
    type: typeof CHECKOUT_ACTION_TYPES.INCREASE_PRODUCT;
    payload: string;
}
export interface DecreaseProductAction {
    type: typeof CHECKOUT_ACTION_TYPES.DECREASE_PRODUCT;
    payload: string;
}