import { createSelector } from 'reselect';

const selectProduct=state=>state.products;

export const getProducts=createSelector(
    [selectProduct],
    (productState) => productState?.products || []
);
console.log(selectProduct.state);
console.log(getProducts);