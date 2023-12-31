import{ CHECKOUT_ACTION_TYPES,ProductDataCheckout,DecreaseProductAction ,IncreaseProductAction ,DeleteProductAction,SetProductAction }from './checkout.type'

interface initialStateInterfaceTS{
    products:ProductDataCheckout[];
    isLoading:boolean;
};
const initialState:initialStateInterfaceTS={
    products:[],
    isLoading:false
};

const productReducer=(state=initialState,action:SetProductAction|DeleteProductAction|DecreaseProductAction|IncreaseProductAction)=>{
    switch(action.type){
        case CHECKOUT_ACTION_TYPES.SET_PRODUCT:
            const existingProductIndex = state.products.findIndex(
                (product) => product._id === action.payload._id
              );
              if (existingProductIndex !== -1) {
                    const updatedProducts = [...state.products];
                    const existingProduct = updatedProducts[existingProductIndex];
                    existingProduct.count += 1;
                    return {
                    ...state,
                    products: updatedProducts,
                    };
                }else {
                    return {
                    ...state,
                    products: [...state.products, { ...action.payload, count: 1 }]
                    }
                }
        case CHECKOUT_ACTION_TYPES.DELETE_PRODUCT:
            return{
                ...state,
                products:state.products.filter(
                    (product)=>product._id!==action.payload
                ),
            };
        case CHECKOUT_ACTION_TYPES.INCREASE_PRODUCT:
            return {
                ...state,
                products:state.products.map((product)=>
                    product._id===action.payload
                    ?{...product,count:product.count+1}
                    :product
                )
            };
        case CHECKOUT_ACTION_TYPES.DECREASE_PRODUCT:
            return {
                ...state,
                products: state.products
                .map((product) => {
                    if (product._id === action.payload && product.count > 0) {
                    return { ...product, count: product.count - 1 };
                    }
                    return product;
                })
                .filter((product) => product.count > 0),
            };
        default:
            return state;
    }
}
export default productReducer;


