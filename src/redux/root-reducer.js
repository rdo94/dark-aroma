import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['directory', 'shop', 'cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);