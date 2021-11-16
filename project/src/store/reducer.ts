import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions-types';
import {Genre} from '../const/const';
import {AuthorizationStatus} from '../const/authorization-status';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  allFilmsData: [],
  selectedGenre: Genre.DefaultGenre,
  isDataLoaded: false,
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.RequireAuthorizationStatus:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.LoadFilmsData:
      return {...state, allFilmsData: action.payload};
    case ActionType.SelectGenre:
      return {...state, selectedGenre: action.payload};
    default:
      return state;
  }
}
