import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, getOffers, getCitys, setOrderOffers, setDataLoadingStatus} from './action';
import {DEFAULT_CITY, DEFAULT_ORDER_OFFERS} from '../const';
import {IInitialState} from '../types/state';

export const initialState: IInitialState = {
  city: DEFAULT_CITY,
  citys: [],
  offers: [],
  orderOffer: DEFAULT_ORDER_OFFERS,
  isDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getCitys, (state, action) => {
      state.citys = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOrderOffers, (state, action) => {
      state.orderOffer = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;

    });
});

export {reducer};
