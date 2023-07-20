import { USER_TYPES } from "./user.type";

export interface initialStateInterface {
    token: string | null;
    isLoading:boolean;
    error:Error | null;
};

const initialState:initialStateInterface={
    token:null,
    isLoading:false,
    error:null
}

interface UserAction{
    type:string;
    payload?:any;
}



const userReducer=(state:initialStateInterface=initialState,action:UserAction)=>{
    switch(action.type){
        case USER_TYPES.LOGIN_SUCCESS:
            return{
                ...state,
                token:action.payload
            };
        case USER_TYPES.LOGOUT:
            return{
                ...state,
                token:null
            };
        default:
            return state
    }
};


export default userReducer