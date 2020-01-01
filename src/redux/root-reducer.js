import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

export default rootReducer;