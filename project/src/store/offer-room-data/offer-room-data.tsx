import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferRoomData} from '../../types/state';
import {fetchCommentsAction, fetchHotelAction, fetchHotelsNearbyAction, insertCommentsAction} from '../api-actions';

const initialState: OfferRoomData = {
  currentOffer: undefined,
  offersNearby: [],
  comments: [],
  isDataLoading: false,
  isMessageSending: false,
};

export const offerRoomData = createSlice({
  name: NameSpace.OfferSearchData,
  initialState,
  reducers: {
    cleareData: (state) => {
      state.currentOffer = undefined;
      state.offersNearby = [];
      state.comments = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHotelAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchHotelAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchHotelAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchHotelsNearbyAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchHotelsNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchHotelsNearbyAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(insertCommentsAction.pending, (state) => {
        state.isMessageSending = true;
      })
      .addCase(insertCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isMessageSending = false;
      })
      .addCase(insertCommentsAction.rejected, (state) => {
        state.isMessageSending = false;
      });
  }
});

export const {cleareData} = offerRoomData.actions;
