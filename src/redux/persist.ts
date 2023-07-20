import storage from "redux-persist/lib/storage/session";
import { rootReducer } from "./root-reducer";
import RootState from './root-reducer'
import { PersistConfig } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

//redux persist config.js
const persistConfig:PersistConfig<RootState>={
    key:'root',
    storage,
};

const persistedReducer=persistReducer(persistConfig,rootReducer);


export default persistedReducer;