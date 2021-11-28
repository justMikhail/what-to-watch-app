import {RootState} from '../store/root-reducer';
import {FilmType} from './film-type';
import {ReviewType} from './review-type';
import {AuthorizationStatus} from '../const/authorization-status';
import {UserInfoType} from './user-info-type';

export type UserData = {
  authorizationStatus: AuthorizationStatus;
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
  similarFilms: FilmType[];
  filmReviews: ReviewType[];
  isCurrentFilmLoaded: boolean;
  isCommentPosted: boolean;
}

export type State = RootState;
