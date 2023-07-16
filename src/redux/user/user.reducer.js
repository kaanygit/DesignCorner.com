import { USER_TYPES } from "./user.type";

const initialState={
    token:null
};

const userReducer=(state=initialState,action)=>{
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