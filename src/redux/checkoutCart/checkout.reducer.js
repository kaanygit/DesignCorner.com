import{ CHECKOUT_ACTION_TYPES }from './checkout.type'

const initialState={
    products:[],
};

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHECKOUT_ACTION_TYPES.SET_PRODUCT:
            const exitingProduct=state.products.find(
                (product)=>product._id===action.payload._id
            );
            if(exitingProduct){
                return {
                    ...state,
                    products:state.products.map((product)=>product._id===action.payload._id?action.payload:product),
                };   
            }else{
                return{
                    ...state,
                    products:[...state.products,action.payload]
                };
            }
        case CHECKOUT_ACTION_TYPES.DELETE_PRODUCT:
            return{
                ...state,
                product:state.products.filter(
                    (product)=>product._id!==action.payload
                ),
            };
        default:
            return state;
    }
}
export default productReducer;


