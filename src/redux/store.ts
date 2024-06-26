import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/authSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'STYLIOO_WEB_PORTAL_1_0',
    storage,
    whitelist: ['auth'],
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    // fix middleware issue
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: ['persist/PERSIST']
    //         },
    //     }).concat(thunk),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
