import {State} from '../types/state';
import {ActionType, Actions} from '../types/actions-types';
import {Genres} from '../const/const';

import {filterFilmsBySelectedGenre} from '../utils/utils';

import {MOCK_FILMS} from '../mocks/mock-films';

const initialState = {
  selectedGenre: Genres.All,
  filteredFilmsBySelectedGenre: MOCK_FILMS,
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectGenre:
      return {...state, selectedGenre: action.payload};
    case ActionType.FilterFilmsBySelectedGenre:
      return {...state, filteredFilmsBySelectedGenre: filterFilmsBySelectedGenre(action.payload, state.selectedGenre)};
  }
}
