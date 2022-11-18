import {createReducer} from '@reduxjs/toolkit';
import {cityChange, loadOfferByCity} from './action';
import {DEFAULT_CITY} from '../const';
import { roomParameters } from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: { }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOfferByCity, (state) => {
      state.offers = roomParameters.filter((item) => item.city === state.city);
    });
});

export {reducer};
