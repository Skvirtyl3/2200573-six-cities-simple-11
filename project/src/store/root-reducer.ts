import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offerRoomData} from './offer-room-data/offer-room-data';
import {offerSearchData} from './offer-search-data/offer-search-data';
import {offerSearchProcess} from './offer-search-process/offer-search-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.OfferRoomData]: offerRoomData.reducer,
  [NameSpace.OfferSearchData]: offerSearchData.reducer,
  [NameSpace.OfferSearchProcess]: offerSearchProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
