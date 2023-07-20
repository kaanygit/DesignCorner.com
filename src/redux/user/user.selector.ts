import { createSelector } from "reselect";
import RootState from "../root-reducer";

interface initialStateInterface{
    readonly token:string|null
}

const getToken=(state:RootState):initialStateInterface=>state.token;

export const selectToken=createSelector(
    getToken,
    (token)=>token
);