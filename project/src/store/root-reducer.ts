import {combineReducers} from 'redux';
import {filmsDataReducer} from './films-data-reducer/films-data-reducer';
import {currentFilmDataReducer} from './current-film-reducer/current-film-reducer';
import {userDataReducer} from './user-data-reducer/user-data-reducer';


export enum NameSpace {
  filmsData = 'FILMS_DATA',
  currentFilmData = 'CURRENT_FILM_DATA',
  userData = 'USER_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.filmsData]: filmsDataReducer,
  [NameSpace.currentFilmData]: currentFilmDataReducer,
  [NameSpace.userData]: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
