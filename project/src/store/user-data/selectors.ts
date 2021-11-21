import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const/authorization-status';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.dataUser].authorizationStatus;
