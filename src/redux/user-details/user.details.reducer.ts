// Initial state

import { USER_TYPE_DETAILS, userDetailsInterface, userDetailsReducerInterfaceTS } from "./user.details.types";

interface initialStateInterfaceTS{
  data:userDetailsInterface[]|null;
  isLoading:boolean;
  error:Error | null;
}

const initialState = {
    data: null,
    isLoading: false,
    error: null,
  };
  
  // Reducer
  const userDetailsReducer = (state:initialStateInterfaceTS = initialState, action:userDetailsReducerInterfaceTS) => {
    switch (action.type) {
      case USER_TYPE_DETAILS.SET_USER_DETAILS:
        return {
          ...state,
          data: action.payload,
        };
      case USER_TYPE_DETAILS.FETCH_USER_DATA:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case USER_TYPE_DETAILS.FETCH_USER_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case USER_TYPE_DETAILS.FETCH_USER_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default userDetailsReducer;

  