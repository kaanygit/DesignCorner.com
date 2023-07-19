import { createSelector } from 'reselect';
import { productsInterfaceRootTS } from './checkout.type';


const selectProduct=(state:productsInterfaceRootTS)=>state.products;

export const getProducts=createSelector(
    [selectProduct],
    (productState) => productState?.products || []
);

