import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/Cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}


const rootReducer = persistReducer(persistConfig, combineReducers({
    userReducer,
    cartReducer,
    directoryReducer,
    shopReducer,
}))



const middewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middewares))

export const persistor = persistStore(store)

export default { store, persistor }