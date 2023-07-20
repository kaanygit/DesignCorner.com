import { PRODUCTS_DATA_TYPES, ProductActionTypes, ProductData } from "./produts.types";


export interface ProductsState{
    products:ProductData[],
    isLoading:boolean,
    error:string|null
};

const initialState:ProductsState={
    products:[],
    isLoading:false,
    error:null,
}


const productsDataReducer=(state=initialState,action:ProductActionTypes):ProductsState=>{
    switch(action.type){
        case PRODUCTS_DATA_TYPES.SET_PRODUCTS:
            return{
                ...state,
                products:action.payload
            }
        case PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                products: action.payload
            };
        case PRODUCTS_DATA_TYPES.FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.error
            };
    
        default:
            return state;
        }
}

export default productsDataReducer
