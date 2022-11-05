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
