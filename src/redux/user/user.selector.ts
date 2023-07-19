import { createSelector } from "reselect";

interface initialState{
    token:string | null;
}

const getToken=(state:initialState)=>state.token;

export const selectToken=createSelector(
    getToken,
    (token)=>token
);