import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";
import { rootReducer } from "./root-reducer";


//redux persist config.js
const persistConfig={
    key:'root',
    storage,
};

const persistedReducer=persistReducer(persistConfig,rootReducer);


export default persistedReducer;