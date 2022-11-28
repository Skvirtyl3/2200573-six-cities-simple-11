import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferType} from '../types/offer';
import {getOffers, setAuthorizationStatus, setDataLoadingStatus} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData, AuhtoriseUser} from '../types/auhtorise';


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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: auhtoriseUser} = await api.post<AuhtoriseUser>(APIRoute.Login, {email, password});
    if(auhtoriseUser)
    {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    }
  },
);

