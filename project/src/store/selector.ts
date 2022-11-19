import { createSelector } from 'reselect';
import {IInitialState} from '../types/state';

const selectCity = (state: IInitialState) => state.city;
const selectCitys = (state: IInitialState) => state.citys;
const selectOffers = (state: IInitialState) => state.offers;


export const selectFilterCity = createSelector(
  selectCity,
  selectCitys,
  (city, citys) => citys.find((item) => item.key === city)
);

export const selectFilterOffers = createSelector(
  selectCity,
  selectOffers,
  (city, offers) => offers.filter((item) => item.city === city)
);

