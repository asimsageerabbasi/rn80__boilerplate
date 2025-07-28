import {configureStore,combineReducers} from "@reduxjs/toolkit";
import authSlice  from "./authStore";
import { mmkvStorage } from "../mmkvLocalStorage";
import { persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key:"shazp",
    storage:mmkvStorage
}
const reducers = combineReducers({
    auth:authSlice
});
const persistReducers = persistReducer(persistConfig,reducers);

export const store = configureStore({
    reducer:persistReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          },
        }),
});

export const persistor = persistStore(store);