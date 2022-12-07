import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferType} from '../types/offer';
import {getOffers, setAuhtoriseUser, setAuthorizationStatus, setDataLoadingStatus} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData, AuhtoriseUser} from '../types/auhtorise';
import { dropToken, setToken } from '../services/token';


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
      setToken(auhtoriseUser.token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setAuhtoriseUser(auhtoriseUser));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: auhtoriseUser} = await api.get<AuhtoriseUser>(APIRoute.Login);
      if(auhtoriseUser)
      {
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(setAuhtoriseUser(auhtoriseUser));
      }
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);
