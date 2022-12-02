import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers, setCitys, setOrderOffers, setDataLoadingStatus, setAuhtoriseUser, setCurrentOffer, setOffersNearby, setComments} from './action';
import {DEFAULT_CITY, DEFAULT_ORDER_OFFERS} from '../const';
import {IInitialState} from '../types/state';

export const initialState: IInitialState = {
  city: DEFAULT_CITY,
  citys: [],
  currentOffer: undefined,
  offers: [],
  offersNearby: [],
  orderOffer: DEFAULT_ORDER_OFFERS,
  comments: [],
  isDataLoading: false,
  auhtoriseUser: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCitys, (state, action) => {
      state.citys = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOrderOffers, (state, action) => {
      state.orderOffer = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuhtoriseUser, (state, action) => {
      state.auhtoriseUser = action.payload;
    });
});

export {reducer};
