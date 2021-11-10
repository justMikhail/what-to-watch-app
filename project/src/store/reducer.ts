import {State} from '../types/state';
import {ActionType, Actions} from '../types/actions-types';
import {Genre} from '../const/const';

import {AuthorizationStatus} from '../const/authorization-status';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknow,
  allFilmsData: [],
  selectedGenre: Genre.DefaultGenre,
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectGenre:
      return {...state, selectedGenre: action.payload};
    default:
      return state;
  }
}
