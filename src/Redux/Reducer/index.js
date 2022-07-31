import { combineReducers } from "redux";

import{userLoginReducer,addReducer,logoutReducer} from '../Reducer/AuthReducer/authReducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage: storage,
  }
const rootReducer = combineReducers({
    userLoginReducer,
    addReducer,
    logoutReducer
});

export default persistReducer(persistConfig, rootReducer);