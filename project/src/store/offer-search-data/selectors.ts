import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { OfferInfo } from '../../types/offer';

export const getOffers = (state: State): OfferInfo[] => state[NameSpace.OfferSearchData].offers;
export const getSearchDataLoadingStatus = (state: State): boolean => state[NameSpace.OfferSearchData].isDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.OfferRoomData].hasError;


