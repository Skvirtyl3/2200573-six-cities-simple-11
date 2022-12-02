import { AuthorizationStatus, OrderOffersEnum } from '../const.js';
import {store} from '../store/index.js';
import { City } from '../types/city';
import { OfferInfo } from '../types/offer';
import { Comment } from '../types/review';
import { AuhtoriseUser } from './auhtorise.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IInitialState {
  offersNearby: OfferInfo[];
  currentOffer: OfferInfo | undefined;
  comments: Comment[];
  isDataLoading: boolean;
  auhtoriseUser: AuhtoriseUser | undefined;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OfferSearchData = {
  offers: OfferInfo[];
  isDataLoading: boolean;
};

export type OfferSearchProcess = {
  city: string;
  citys: City[];
  orderOffer: OrderOffersEnum;
}
