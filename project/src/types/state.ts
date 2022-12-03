import { AuthorizationStatus, OrderOffersEnum } from '../const.js';
import {store} from '../store/index.js';
import { City } from '../types/city';
import { OfferInfo } from '../types/offer';
import { Comment } from '../types/review';
import { AuhtoriseUser } from './auhtorise.js';
import { Location } from '../types/location';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  auhtoriseUser: AuhtoriseUser | undefined;
};

export type OfferSearchData = {
  offers: OfferInfo[];
  isDataLoading: boolean;
};

export type OfferSearchProcess = {
  city: string;
  citys: City[];
  orderOffer: OrderOffersEnum;
  hoverOfferPoint: Location | undefined | null;
}

export type OfferRoomData = {
  offersNearby: OfferInfo[];
  currentOffer: OfferInfo | undefined;
  comments: Comment[];
  isDataLoading: boolean;
  isMessageSending: boolean;
  hasError: boolean;
};
