import {combineReducers} from 'redux';
import {userDataReducer} from './user-data-reducer/user-data-reducer';
import {allFilmsDataReducer} from './all-films-data-reducer/all-films-data-reducer'; //

export enum NameSpace {
  allFilmsData = 'ALL_FILMS_DATA',
  userData = 'USER_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.allFilmsData]: allFilmsDataReducer,
  [NameSpace.userData]: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
