import { City } from './types/city';

export enum AppRoute
{
  Main = '/',
  Login = '/login',
  Room = '/offer',
  RoomById = '/offer/:id'
}

export enum AuthorizationStatus
{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

//#region Настройки карты
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const ZOOM_MAP_GLOBAL = 12;
export const ZOOM_MAP_ROOM = 13;
export const LAYER_MAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTE_LAYER_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
//#endregion Настройки карты

export const MIN_REQURID_SYMBOL_COUNT = 50;
export const ONE_STAR_WIDTH = 20;
export const NEAR_PLACES_COUNT = 3;
export const DEFAULT_CITY = 'Paris';

export enum OrderOffersEnum
{
  Popular = 1,
  LowToHighPrice = 2,
  HighToLowPrice = 3,
  TopRatedFirst = 4
}

export const OrderOffers =
[
  {
    key: OrderOffersEnum.Popular,
    title: 'Популярные'
  },
  {
    key: OrderOffersEnum.LowToHighPrice,
    title: 'От дешёвых к дорогим'
  },
  {
    key: OrderOffersEnum.HighToLowPrice,
    title: 'От дорогих к дешёвым'
  },
  {
    key: OrderOffersEnum.TopRatedFirst,
    title: 'От высокого рейтинга к низкому'
  },
];

export const DEFAULT_ORDER_OFFERS = OrderOffersEnum.Popular;


export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Hotels = '/hotels',
  HotelById = '/hotels/:id',
  HotelsNearby = '/hotels/:id/nearby',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const AUTH_TOKEN_KEY_NAME = 'six-cities-2200573';

export const GALLERY_ITEMS_COUNT = 6;

export const citys: City[] =
[{
  name: 'Paris',
  location: {
    latitude: 48.85,
    longitude: 2.35,
    zoom: 10
  }
},
{
  name: 'Cologne',
  location: {
    latitude: 50.93,
    longitude: 6.95,
    zoom: 10
  }
},
{
  name: 'Brussels',
  location: {
    latitude: 50.84,
    longitude: 4.34,
    zoom: 10
  }
},
{
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88,
    zoom: 10
  }
},
{
  name: 'Hamburg',
  location: {
    latitude: 53.55,
    longitude: 10.00,
    zoom: 10
  }
},
{
  name: 'Dusseldorf',
  location: {
    latitude: 51.22,
    longitude: 6.77,
    zoom: 10
  }
},
];
