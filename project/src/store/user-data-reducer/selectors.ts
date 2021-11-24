import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const/authorization-status';
import {UserInfoType} from '../../types/user-info-type';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.userData].authorizationStatus;
export const getUserInfo = (state: State): UserInfoType => state[NameSpace.userData].userInfo;
