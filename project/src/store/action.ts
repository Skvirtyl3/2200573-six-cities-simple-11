import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction('CITY_CHANGE', (value: string) =>
  ({
    payload: value
  }));
