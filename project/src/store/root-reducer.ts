import {combineReducers} from 'redux';
import {userData} from './user-data/user-data';
import {allFilmsData} from './all-films-data/all-films-data';

export enum NameSpace {
  dataUser = 'DATA_USER',
  dataAllFilms = 'DATA_ALL_FILMS',
}

export const rootReducer = combineReducers({
  [NameSpace.dataUser]: userData,
  [NameSpace.dataAllFilms]: allFilmsData,
});

export type RootState = ReturnType<typeof rootReducer>;
