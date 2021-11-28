import {combineReducers} from 'redux';
import {filmsDataReducer} from './redusers/films-data-reducer/films-data-reducer';
import {currentFilmDataReducer} from './redusers/current-film-reducer/current-film-reducer';
import {userDataReducer} from './redusers/user-data-reducer/user-data-reducer';
import {fetchApiStatusReducer} from './redusers/fetch-status-reducer/fetch-status-reducer';

export enum NameSpace {
  filmsData = 'FILMS_DATA',
  currentFilmData = 'CURRENT_FILM_DATA',
  userData = 'USER_DATA',
  fetchApiStatus = 'FETCH_API_STATUS'
}

export const rootReducer = combineReducers({
  [NameSpace.filmsData]: filmsDataReducer,
  [NameSpace.currentFilmData]: currentFilmDataReducer,
  [NameSpace.userData]: userDataReducer,
  [NameSpace.fetchApiStatus]: fetchApiStatusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
