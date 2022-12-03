import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, OrderOffersEnum} from '../../const';
import {OfferSearchProcess} from '../../types/state';
import {DEFAULT_CITY, DEFAULT_ORDER_OFFERS} from '../../const';
import { City } from '../../types/city';
import { Location } from '../../types/location';

const initialState: OfferSearchProcess = {
  city: DEFAULT_CITY,
  citys: [],
  orderOffer: DEFAULT_ORDER_OFFERS,
  hoverOfferPoint: null
};

export const offerSearchProcess = createSlice({
  name: NameSpace.OfferSearchProcess,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCitys: (state, action: PayloadAction<City[]>) => {
      state.citys = action.payload;
    },
    setOrderOffers: (state, action: PayloadAction<OrderOffersEnum>) => {
      state.orderOffer = action.payload;
    },
    setHoverOfferPoint: (state, action: PayloadAction<Location | undefined | null>) => {
      state.hoverOfferPoint = action.payload;
    },
  },
});

export const {setCurrentCity, setCitys, setOrderOffers, setHoverOfferPoint} = offerSearchProcess.actions;
