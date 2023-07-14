import { createStore } from "redux";

//action types
const SET_TOKEN="SET_TOKEN";

//action creator

export const setToken=(token)=>({
    type:SET_TOKEN,
    payload:token,
});

//initial state
const initialState = {
    token: localStorage.getItem('token') || null,
  };

//reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_TOKEN:
            localStorage.setItem('token', action.payload);
            return {
              ...state,
              token: action.payload,
            };
          default:
            return state;
    }
};

const store=createStore(reducer);

export default store;
