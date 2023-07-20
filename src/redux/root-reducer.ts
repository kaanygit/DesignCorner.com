import { combineReducers } from 'redux';
import productReducer from './checkoutCart/checkout.reducer';
import userReducer from './user/user.reducer';
import userDetailsReducer from './user-details/user.details.reducer'
import productsDataReducer from './products/products.reducer';

export const rootReducer=combineReducers({
    products:productReducer,
    token:userReducer,
    userDetails:userDetailsReducer,
    productsData:productsDataReducer
})
type RootState = ReturnType<typeof rootReducer>;
export default RootState;