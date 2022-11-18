import {createAction} from '@reduxjs/toolkit';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const getOffersByCityId = createAction('offer/getOffersByCityId');
