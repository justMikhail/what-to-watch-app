import {RootState} from '../store/root-reducer';
import {FilmType} from './film-type';
import {CommentType} from './CommentType';
import {AuthorizationStatus} from '../const/authorization-status';
import {UserInfoType} from './user-info-type';

export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfoType;
}

export type FilmsData = {
  isDataLoaded: boolean;
  allFilmsData: FilmType[];
  selectedGenre: string;
  activeFilmId: null | number;
}

export type CurrentFilmData = {
  currentFilm: FilmType | null;
  similarFilms: FilmType[];
  filmComments: CommentType[];
  isCurrentFilmLoaded: boolean;
  isCommentPosting: boolean;
}

export type State = RootState;
