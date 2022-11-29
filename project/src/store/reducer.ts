import {createReducer} from '@reduxjs/toolkit';
import {IInitialState} from '../types/state';

export const initialState: IInitialState = {
  city: DEFAULT_CITY,
  citys: [],
  offers: [],
  orderOffer: DEFAULT_ORDER_OFFERS
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
    });
});

export {reducer};
