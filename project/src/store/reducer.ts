import {Genres} from '../const/const';

import {MOCK_FILMS} from '../mocks/mock-films';
import {filterFilmsBySelectedGenre} from '../utils/utils';

const initialState = {
  selectedGenre: Genres.All,
  filteredFilmsBySelectedGenre: MOCK_FILMS,
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectedGenre:
      return {...state, genre: action.payload};
    case ActionType.FilterFilmsBySelectedGanre:
      return {...state, filteredFilmsBySelectedGenre: filterFilmsBySelectedGenre(action.payload, state.selectedGenre)};
  }
}
