import {NameSpace} from '../../root-reducer';
import {State} from '../../../types/state';
import {FetchStatus} from '../../../const/fetch-status';

export const getPostStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].postStatus;
export const getCommentPostStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].commentPostStatus;
export const getPromoFilmGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].promoGetStatus;
export const getAllFilmsListGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].filmsGetStatus;
export const getCurrentFilmGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].filmGetStatus;
export const getSimilarFilmsListGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].similarGetStatus;
export const getCommentsListGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].commentsGetStatus;
export const getFavoritesFilmsListGetStatus = (state: State): FetchStatus  => state[NameSpace.fetchApiStatus].favoritesGetStatus;
