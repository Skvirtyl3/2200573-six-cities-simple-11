import { createSelector } from 'reselect';
import { OfferInfo } from '../types/offer';
import { OrderOffer } from '../const';
import { getCity, getCitys, getOrderOffer } from './offer-search-process/selectors';
import { getOffers } from './offer-search-data/selectors';


const selectCity = getCity;
const selectCitys = getCitys;
const selectOffers = getOffers;
const selectOrderOffer = getOrderOffer;


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
      (a: OfferInfo,b: OfferInfo) =>
      {
        switch(order) {
          case OrderOffer.Popular:
            return 0;
            break;
          case OrderOffer.HighToLowPrice:
            return b.price - a.price;
            break;
          case OrderOffer.LowToHighPrice:
            return a.price - b.price;
            break;
          case OrderOffer.TopRatedFirst:
            return b.rating - a.rating;
            break;
          default:
            return 0;
            break;
        }
      })
);


