import { takeLatest, put, select, take } from 'redux-saga/effects';
import { USER_TYPES } from './user.type';
import {selectToken} from './user.selector'

function* handleLogin(action){
    const {token}=action.payload;
    
    yield put({type:'persist/REHYDRATE',payload:{token}});
}

function* handleLogout(){
    yield put({type:'persist/REHYDRATE',payload:{token:null}});
}

export default function* rootUserSaga(){
    yield takeLatest(USER_TYPES.LOGIN_SUCCESS,handleLogin);
    yield takeLatest(USER_TYPES.LOGOUT,handleLogout);
}