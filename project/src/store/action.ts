import {createAction} from '@reduxjs/toolkit';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getCitys = createAction('city/getCitys');
export const getOffers = createAction('offer/getOffers');
