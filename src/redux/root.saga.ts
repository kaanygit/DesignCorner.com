import {all} from 'redux-saga/effects'
import rootUserSaga from './user/user.saga';

function* rootSaga(){
   yield all([rootUserSaga()]);
}

export default rootSaga;