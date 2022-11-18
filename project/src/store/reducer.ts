import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, getOffersByCityId} from './action';
import { roomParameters } from '../mocks/offers';
import { OfferParameter } from '../types/offer';
import { City } from '../types/city';
import { citys } from '../mocks/city';

const initialState = {
  city: undefined as City | undefined,
  offers: [] as OfferParameter[]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      const city = citys.find((item) => item.key === action.payload);
      state.city = city;
    })
    .addCase(getOffersByCityId, (state) => {
      state.city ?
        state.offers = roomParameters.filter((item) => state.city && item.city === state.city.key) :
        state.offers = roomParameters;
    });
});

export {reducer};
