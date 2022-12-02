import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferInfo} from '../types/offer';
import {Comment, SendComment} from '../types/review';
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

export const fetchHotelAction = createAsyncThunk<OfferInfo, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotel',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfo>(APIRoute.HotelById.replace(':id',id.toString()));
    return data;
  },
);

export const fetchHotelsNearbyAction = createAsyncThunk<OfferInfo[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'hotel/fetchHotelsNearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfo[]>(APIRoute.HotelsNearby.replace(':id',id.toString()));
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(APIRoute.Comments.replace(':id',id.toString()));
    return data;
  },
);

export const insertCommentsAction = createAsyncThunk<Comment[], SendComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/insertComments',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(APIRoute.Comments.replace(':id',offerId.toString()), {comment, rating});
    return data;
  },
);


export const loginAction = createAsyncThunk<AuhtoriseUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AuhtoriseUser>(APIRoute.Login, {email, password});
    setToken(data.token);
    return data;
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
  },
);

export const checkAuthAction = createAsyncThunk<AuhtoriseUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<AuhtoriseUser>(APIRoute.Login);
    return data;
  },
);
