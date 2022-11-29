import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, OrderOffersEnum } from '../const';
import { OfferInfo } from '../types/offer';
import { City} from '../types/city';
import { AuhtoriseUser } from '../types/auhtorise';

export const setCurrentCity = createAction('city/setCurrentCity', (value: string) =>
  ({
    payload: value
  }));
export const setCitys = createAction('city/setCitys', (value: City[]) =>
  ({
    payload: value
  }));
export const setOffers = createAction('offer/setOffers', (value: OfferInfo[]) =>
  ({
    payload: value
  }));
export const setCurrentOffer = createAction('offer/setCurrentOffer', (value: OfferInfo) =>
  ({
    payload: value
  }));
export const setOffersNearby = createAction('offer/setOffersNearby', (value: OfferInfo[]) =>
  ({
    payload: value
  }));
export const setOrderOffers = createAction('offer/setOrderOffers', (value: OrderOffersEnum) =>
  ({
    payload: value
  }));
export const setDataLoadingStatus = createAction('data/setDataLoadingStatus', (value: boolean) =>
  ({
    payload: value
  }));
export const setAuthorizationStatus = createAction('user/authorization', (value: AuthorizationStatus) =>
  ({
    payload: value
  }));
export const setAuhtoriseUser = createAction('user/setAuhtoriseUser', (value: AuhtoriseUser | undefined) =>
  ({
    payload: value
  }));

