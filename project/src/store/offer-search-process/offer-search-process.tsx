import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, OrderOffersEnum} from '../../const';
import {OfferSearchProcess} from '../../types/state';
import {DEFAULT_CITY, DEFAULT_ORDER_OFFERS} from '../../const';
import { City } from '../../types/city';

const initialState: OfferSearchProcess = {
  city: DEFAULT_CITY,
  citys: [],
  orderOffer: DEFAULT_ORDER_OFFERS,
};

export const offerSearchProcess = createSlice({
  name: NameSpace.OfferSearch,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<{city: string}>) => {
      const {city} = action.payload;
      state.city = city;
    },
    setCitys: (state, action: PayloadAction<{citys: City[]}>) => {
      const {citys} = action.payload;
      state.citys = citys;
    },
    setOrderOffers: (state, action: PayloadAction<{order: OrderOffersEnum}>) => {
      const {order} = action.payload;
      state.orderOffer = order;
    },
  },
});

export const {setCurrentCity, setCitys, setOrderOffers} = offerSearchProcess.actions;
