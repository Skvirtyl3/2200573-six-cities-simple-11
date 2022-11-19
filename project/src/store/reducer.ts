import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, getOffers, getCitys} from './action';
import { roomParameters } from '../mocks/offers';
import { citys } from '../mocks/city';
import {DEFAULT_CITY} from '../const';
import {IInitialState} from '../types/state';

export const initialState: IInitialState = {
  city: DEFAULT_CITY,
  citys: [],
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getCitys, (state) => {
      state.citys = citys;
    })
    .addCase(getOffers, (state) => {
      state.offers = roomParameters;
    });
});

export {reducer};
