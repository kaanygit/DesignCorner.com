import { USER_TYPE_DETAILS,userDetailsInterface,SetUserDetailsAction,FetchUserDataSuccessAction,FetchUserDataFailureAction } from "./user.details.types";


// Eylem oluşturucuları
export const setUserDetails = (data:userDetailsInterface):SetUserDetailsAction => ({
    type: USER_TYPE_DETAILS.SET_USER_DETAILS,
    payload: data,
  });
  
  export const fetchUserData = ():{type:USER_TYPE_DETAILS.FETCH_USER_DATA} => ({
    type: USER_TYPE_DETAILS.FETCH_USER_DATA,
  });
  
  export const fetchUserDataSuccess = (data:userDetailsInterface):FetchUserDataSuccessAction => ({
    type: USER_TYPE_DETAILS.FETCH_USER_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchUserDataFailure = (error:string):FetchUserDataFailureAction => ({
    type: USER_TYPE_DETAILS.FETCH_USER_DATA_FAILURE,
    payload: error,
  });
  