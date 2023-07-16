import { USER_TYPES } from "./user.type";

export const setToken=(token)=>({
    type:USER_TYPES.LOGIN_SUCCESS,
    payload:token
});

export const removeToken=()=>({
    type:USER_TYPES.LOGOUT,
})
