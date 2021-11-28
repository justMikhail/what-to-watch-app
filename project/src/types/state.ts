import {RootState} from '../store/root-reducer';
import {FilmType} from './film-type';
import {ReviewType} from './review-type';
import {AuthorizationStatus} from '../const/authorization-status';
import {UserInfoType} from './user-info-type';
import {FetchStatus} from '../const/fetch-status';

export type UserData = {
  userAuthorizationStatus: AuthorizationStatus;
  userInfo: UserInfoType;
  userFavoriteFilmsList: FilmType[];
}

export type FilmsData = {
  isDataLoaded: boolean;
  allFilmsData: FilmType[];
  promoFilmData: FilmType;
  selectedGenre: string;
  activeFilmId: null | number;
}

export type CurrentFilmData = {
  currentFilm: FilmType | null;
  similarFilmsList: FilmType[];
  filmReviews: ReviewType[];
  isCurrentFilmLoaded: boolean;
  isCommentPosted: boolean;
}

export type FetchStatusListTypes = {
  postStatus: FetchStatus,
  commentPostStatus: FetchStatus,
  promoGetStatus: FetchStatus,
  filmsGetStatus: FetchStatus,
  filmGetStatus: FetchStatus,
  similarGetStatus: FetchStatus,
  commentsGetStatus: FetchStatus,
  favoritesGetStatus: FetchStatus,
}

export type State = RootState;
