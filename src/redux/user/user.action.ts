import { USER_TYPES } from "./user.type";

interface initialStateUserAction{
    token:string | null
}

export const setToken=(token:initialStateUserAction)=>({
    type:USER_TYPES.LOGIN_SUCCESS,
    payload:token
});



export const removeToken=()=>({
    type:USER_TYPES.LOGOUT,
});
