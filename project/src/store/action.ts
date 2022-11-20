import {createAction} from '@reduxjs/toolkit';
import { OrderOffersEnum } from '../const';
import { OfferType } from '../types/offer';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getCitys = createAction('city/getCitys');
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

