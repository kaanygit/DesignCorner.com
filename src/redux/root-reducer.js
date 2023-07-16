import { combineReducers } from 'redux';
import productReducer from './checkoutCart/checkout.reducer';
import userReducer from './user/user.reducer';

export const rootReducer=combineReducers({
    products:productReducer,
    token:userReducer
})