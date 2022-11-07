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

export const ZOOM_MAP_GLOBAL = 10; //зум для общей карты
export const ZOOM_MAP_ROOM = 20; //зум карты для выбранного предложения, чтобы было близко к метке
export const LAYER_MAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTE_LAYER_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

//#endregion Настройки карты
