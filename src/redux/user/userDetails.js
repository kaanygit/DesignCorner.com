

// Eylem türleri
export const USER_TYPE_DETAILS = {
  SET_USER_DETAILS: "SET_USER_DETAILS",
  FETCH_USER_DATA: "FETCH_USER_DATA",
  FETCH_USER_DATA_SUCCESS: "FETCH_USER_DATA_SUCCESS",
  FETCH_USER_DATA_FAILURE: "FETCH_USER_DATA_FAILURE",
};

// Eylem oluşturucuları
export const setUserDetails = (data) => ({
  type: USER_TYPE_DETAILS.SET_USER_DETAILS,
  payload: data,
});

export const fetchUserData = () => ({
  type: USER_TYPE_DETAILS.FETCH_USER_DATA,
});

export const fetchUserDataSuccess = (data) => ({
  type: USER_TYPE_DETAILS.FETCH_USER_DATA_SUCCESS,
  payload: data,
});

export const fetchUserDataFailure = (error) => ({
  type: USER_TYPE_DETAILS.FETCH_USER_DATA_FAILURE,
  payload: error,
});

// Initial state
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

// Reducer
const userDetailsReducer = (state = initialState, action) => {
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

// Selector
export const selectUserData = (state) => state.userDetails.data;



export default userDetailsReducer;
