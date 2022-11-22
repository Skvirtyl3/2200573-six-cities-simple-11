import {createAction} from '@reduxjs/toolkit';
import { OrderOffersEnum } from '../const';
import { City } from '../types/city';
import { OfferParameter } from '../types/offer';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getCitys = createAction('city/getCitys', (value: City[]) =>
  ({
    payload: value
  }));
export const getOffers = createAction('offer/getOffers', (value: OfferParameter[]) =>
  ({
    payload: value
  }));
export const setOrderOffers = createAction('offer/setOrderOffers', (value: OrderOffersEnum) =>
  ({
    payload: value
  }));
