import { createSelector } from "reselect";

const getToken=(state)=>state.token;

export const selectToken=createSelector(
    getToken,
    (token)=>token
);