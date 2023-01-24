import  { combineReducers } from 'redux' ;

import walletReducer from './wallet';
import nftReducer from './nft';

export default combineReducers({
    wallet : walletReducer,
    nft : nftReducer
});