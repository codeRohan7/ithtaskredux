import { createStore } from 'redux';
import rootReducer from '../Reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 

 

export const store = createStore(rootReducer);
export const persistor = persistStore(store);

export default { store, persistor };

