import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferType} from '../types/offer';
import {getOffers, setDataLoadingStatus} from './action';
import {APIRoute} from '../const';


export const fetchHotelAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Hotels);
    dispatch(setDataLoadingStatus(false));
    dispatch(getOffers(data));
  },
);
