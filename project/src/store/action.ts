import {createAction} from '@reduxjs/toolkit';
import { OrderOffersEnum } from '../const';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getCitys = createAction('city/getCitys');
export const getOffers = createAction('offer/getOffers');
export const setOrderOffers = createAction('offer/setOrderOffers', (value: OrderOffersEnum) =>
  ({
    payload: value
  }));
