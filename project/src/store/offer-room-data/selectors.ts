import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { OfferInfo } from '../../types/offer';
import { Comment } from '../../types/review';

export const getCurrentOffer = (state: State): OfferInfo | undefined => state[NameSpace.OfferRoomData].currentOffer;
export const getOffersNearby = (state: State): OfferInfo[] => state[NameSpace.OfferRoomData].offersNearby;
export const getComments = (state: State): Comment[] => state[NameSpace.OfferRoomData].comments;
export const getRoomDataLoadingStatus = (state: State): boolean => state[NameSpace.OfferRoomData].isDataLoading;
export const getMessageSending = (state: State): boolean => state[NameSpace.OfferRoomData].isMessageSending;
export const getErrorStatus = (state: State): boolean => state[NameSpace.OfferRoomData].hasError;
export const getMessageSendingError = (state: State): boolean => state[NameSpace.OfferRoomData].hasMessageSendingError;

