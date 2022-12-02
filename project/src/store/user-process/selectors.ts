import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import { AuhtoriseUser } from '../../types/auhtorise';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuhtoriseUser = (state: State): AuhtoriseUser | undefined => state[NameSpace.User].auhtoriseUser;
export const getIsAuthorised = (state: State): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
