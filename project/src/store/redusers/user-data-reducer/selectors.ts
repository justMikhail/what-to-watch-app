import {NameSpace} from '../../root-reducer';
import {State} from '../../../types/state';
import {AuthorizationStatus} from '../../../const/authorization-status';
import {UserInfoType} from '../../../types/user-info-type';
import {FilmType} from '../../../types/film-type';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.userData].userAuthorizationStatus;
export const getUserInfo = (state: State): UserInfoType => state[NameSpace.userData].userInfo;
export const getUserFavirteFilmsList = (state: State): FilmType[] => state[NameSpace.userData].userFavoriteFilmsList;
