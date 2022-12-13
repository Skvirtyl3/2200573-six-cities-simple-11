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
  hasError: false,
  hasMessageSendingError: false,
};

export const offerRoomData = createSlice({
  name: NameSpace.OfferRoomData,
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
        state.hasError = false;
      })
      .addCase(fetchHotelAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchHotelAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchHotelsNearbyAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchHotelsNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchHotelsNearbyAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(insertCommentsAction.pending, (state) => {
        state.isMessageSending = true;
        state.hasMessageSendingError = false;
      })
      .addCase(insertCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isMessageSending = false;
      })
      .addCase(insertCommentsAction.rejected, (state) => {
        state.isMessageSending = false;
        state.hasMessageSendingError = true;
      });
  }
});

export const {cleareData} = offerRoomData.actions;
