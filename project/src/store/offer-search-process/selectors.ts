import {NameSpace, OrderOffersEnum} from '../../const';
import {State} from '../../types/state';
import { City } from '../../types/city';

export const getCity = (state: State): string => state[NameSpace.OfferSearchProcess].city;
export const getCitys = (state: State): City[] => state[NameSpace.OfferSearchProcess].citys;
export const getOrderOffer = (state: State): OrderOffersEnum => state[NameSpace.OfferSearchProcess].orderOffer;
