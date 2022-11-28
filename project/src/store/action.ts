import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, OrderOffersEnum } from '../const';
import { OfferType } from '../types/offer';
import { City} from '../types/city';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getCitys = createAction('city/getCitys', (value: City[]) =>
  ({
    payload: value
  }));
export const getOffers = createAction('offer/getOffers', (value: OfferType[]) =>
  ({
    payload: value
  }));
export const setOrderOffers = createAction('offer/setOrderOffers', (value: OrderOffersEnum) =>
  ({
    payload: value
  }));
export const setDataLoadingStatus = createAction('data/setDataLoadingStatus', (value: boolean) =>
  ({
    payload: value
  }));
export const setAuthorizationStatus = createAction('user/authorization', (value: AuthorizationStatus) =>
  ({
    payload: value
  }));

