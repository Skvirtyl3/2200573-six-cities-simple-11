import { createSelector } from 'reselect';
import {IInitialState} from '../types/state';
import { OfferType } from '../types/offer';
import { OrderOffersEnum } from '../const';

const selectCity = (state: IInitialState) => state.city;
const selectCitys = (state: IInitialState) => state.citys;
const selectOffers = (state: IInitialState) => state.offers;
const selectOrderOffer = (state: IInitialState) => state.orderOffer;


export const selectFilterCity = createSelector(
  selectCity,
  selectCitys,
  (city, citys) => citys.find((item) => item.name === city)
);

export const selectFilterOffers = createSelector(
  selectCity,
  selectOffers,
  selectOrderOffer,
  (city, offers, order) => offers.filter((item) => item.city.name === city)
    .sort(
      (a: OfferType,b: OfferType) =>
      {
        switch(order) {
          case OrderOffersEnum.Popular:
            return 0;
            break;
          case OrderOffersEnum.HighToLowPrice:
            return b.price - a.price;
            break;
          case OrderOffersEnum.LowToHighPrice:
            return a.price - b.price;
            break;
          case OrderOffersEnum.TopRatedFirst:
            return b.rating - a.rating;
            break;
          default:
            return 0;
            break;
        }
      })
);


