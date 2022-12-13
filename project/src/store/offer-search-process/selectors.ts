import {NameSpace, OrderOffer} from '../../const';
import {State} from '../../types/state';
import { City } from '../../types/city';
import { Location } from '../../types/location';

export const getCity = (state: State): string => state[NameSpace.OfferSearchProcess].city;
export const getCitys = (state: State): City[] => state[NameSpace.OfferSearchProcess].citys;
export const getOrderOffer = (state: State): OrderOffer => state[NameSpace.OfferSearchProcess].orderOffer;
export const getHoverOfferPoint = (state: State): Location | undefined | null => state[NameSpace.OfferSearchProcess].hoverOfferPoint;
