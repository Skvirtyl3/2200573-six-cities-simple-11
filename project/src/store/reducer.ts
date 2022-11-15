import {createReducer} from '@reduxjs/toolkit';
import {cityChange} from './action';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
