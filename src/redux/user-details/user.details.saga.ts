import { USER_TYPE_DETAILS} from './user.details.types';
import { fetchUserData, fetchUserDataFailure, fetchUserDataSuccess } from './user.details.action';
import { call, put, takeLatest } from 'redux-saga/effects';


// **** Generator arayüzü, üç generic parametre alır:

// İlk parametre, işlevin döndüreceği değerlerin türünü belirtir.
// İkinci parametre, yield ifadesine verilen parametrelerin türünü belirtir.
// Üçüncü parametre, next() metodunun döndüreceği değerin türünü belirtir.


// Saga
function* fetchUserDataSaga():Generator<any,any,any>{
  try {
    // API çağrısı yapılır ve veri alınır
    const userData = yield call(fetchUserData);
    yield put(fetchUserDataSuccess(userData));
  } catch (error:any) {
    yield put(fetchUserDataFailure(error));
  }
}

export function* watchFetchUserData():Generator<any,any,any>{
  yield takeLatest(USER_TYPE_DETAILS.FETCH_USER_DATA, fetchUserDataSaga);
}
