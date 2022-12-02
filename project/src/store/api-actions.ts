import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferInfo} from '../types/offer';
import {Comment, SendComment} from '../types/review';
import {setAuhtoriseUser, setCurrentOffer, setOffersNearby, setComments} from './action';
import {APIRoute} from '../const';
import {AuthData, AuhtoriseUser} from '../types/auhtorise';
import { dropToken, setToken } from '../services/token';


export const fetchHotelsAction = createAsyncThunk<OfferInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfo[]>(APIRoute.Hotels);
    return data;
  },
);

export const fetchHotelAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotel',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfo>(APIRoute.HotelById.replace(':id',id.toString()));
    dispatch(setCurrentOffer(data));
  },
);

export const fetchHotelsNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotelsNearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfo[]>(APIRoute.HotelsNearby.replace(':id',id.toString()));
    dispatch(setOffersNearby(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(APIRoute.Comments.replace(':id',id.toString()));
    dispatch(setComments(data));
  },
);

export const insertCommentsAction = createAsyncThunk<void, SendComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/insertComments',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(APIRoute.Comments.replace(':id',offerId.toString()), {comment, rating});
    dispatch(setComments(data));
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
    dispatch(setAuhtoriseUser(undefined));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data: auhtoriseUser} = await api.get<AuhtoriseUser>(APIRoute.Login);
    if(auhtoriseUser)
    {
      dispatch(setAuhtoriseUser(auhtoriseUser));
    }
  },
);
