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

export const MIN_REQURID_SYMBOL_COUNT = 50;
export const ONE_STAR_WIDTH = 50;
export const NEAR_PLACES_COUNT = 3; //сколько офферов мы показываем в "предложениях"
