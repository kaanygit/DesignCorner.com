import { takeLatest, put } from 'redux-saga/effects';
import { USER_TYPES } from './user.type';
import { setToken } from './user.action';

function* handleLoginSuccess(action){
    const {token}=action.payload;

    yield put({type:'persist/REHYDRATE',payload:{token}});
}

function* handleLogout(){
    yield put({type:'persist/REHYDRATE',payload:{token:null}});
}

export default function* rootUserSaga(){
    yield takeLatest(USER_TYPES.LOGIN_SUCCESS,handleLoginSuccess);
    yield takeLatest(USER_TYPES.LOGOUT,handleLogout);
}