import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction('CITY_CHANGE', (value: string) =>
  ({
    payload: value
  }));
export const loadOfferByCity = createAction('LOAD_OFFER_BY_CITY');
