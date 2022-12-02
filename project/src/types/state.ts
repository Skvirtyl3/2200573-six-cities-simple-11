import { AuthorizationStatus, OrderOffersEnum } from '../const.js';
import {store} from '../store/index.js';
import { City } from '../types/city';
import { OfferInfo } from '../types/offer';
import { Comment } from '../types/review';
import { AuhtoriseUser } from './auhtorise.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IInitialState {
  city: string;
  citys: City[];
  offers: OfferInfo[];
  offersNearby: OfferInfo[];
  currentOffer: OfferInfo | undefined;
  orderOffer: OrderOffersEnum;
  comments: Comment[];
  isDataLoading: boolean;
  auhtoriseUser: AuhtoriseUser | undefined;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
