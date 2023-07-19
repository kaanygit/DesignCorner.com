import { combineReducers } from 'redux';
import productReducer from './checkoutCart/checkout.reducer';
import userReducer from './user/user.reducer';
import userDetailsReducer from './user-details/user.details.reducer'

export const rootReducer=combineReducers({
    products:productReducer,
    token:userReducer,
    userDetails:userDetailsReducer
})