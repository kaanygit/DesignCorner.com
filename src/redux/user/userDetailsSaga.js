import {takeLatest,put,call} from 'redux-saga'
import { fetchUserData, fetchUserDataFailure, fetchUserDataSuccess ,USER_TYPE_DETAILS} from './userDetails';

// Saga
function* fetchUserDataSaga() {
  try {
    // API çağrısı yapılır ve veri alınır
    const userData = yield call(fetchUserData);
    yield put(fetchUserDataSuccess(userData));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
  }
}

export function* watchFetchUserData() {
  yield takeLatest(USER_TYPE_DETAILS.FETCH_USER_DATA, fetchUserDataSaga);
}
