import { ProductData } from "./produts.types";
import RootState from "../root-reducer";
import { createSelector } from "reselect";

export const selectProduct=(state:RootState):ProductData[]=>state.products.products;

export const selectProducts=createSelector(
    [selectProduct],
    (products)=>products || []
)

export const selectIsLoading=(state:RootState):boolean=>state.products.isLoading;

