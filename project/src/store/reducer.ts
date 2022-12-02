import {createReducer} from '@reduxjs/toolkit';
import {setDataLoadingStatus, setAuhtoriseUser, setCurrentOffer, setOffersNearby, setComments} from './action';
import {IInitialState} from '../types/state';

export const initialState: IInitialState = {
  currentOffer: undefined,
  offersNearby: [],
  comments: [],
  isDataLoading: false,
  auhtoriseUser: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
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
