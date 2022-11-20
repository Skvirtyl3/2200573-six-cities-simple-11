import { OrderOffersEnum } from '../const.js';
import {store} from '../store/index.js';
import { City } from '../types/city';
import { OfferType } from '../types/offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IInitialState {
  city: string;
  citys: City[];
  offers: OfferType[];
  orderOffer: OrderOffersEnum;
}

