import { AuthorizationStatus, OrderOffersEnum } from '../const.js';
import {store} from '../store/index.js';
import { City } from '../types/city';
import { OfferInfo } from '../types/offer';
import { AuhtoriseUser } from './auhtorise.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IInitialState {
  city: string;
  citys: City[];
  offers: OfferInfo[];
  currentOffer: OfferInfo | undefined;
  orderOffer: OrderOffersEnum;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  auhtoriseUser: AuhtoriseUser | undefined;
}
