import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

//action types
const SET_TOKEN="SET_TOKEN";

//action creator

export const setToken=(token)=>({
    type:SET_TOKEN,
    payload:token,
});

//initial state
const initialState = {
    token: null,
  };

//reducer
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_TOKEN:
            return {
              ...state,
              token: action.payload,
            };
          default:
            return state;
    }
};

//redux persist config.js
const persistConfig={
    key:'root',
    storage
};

const persistedReducer=persistReducer(persistConfig,userReducer);

export default persistedReducer;