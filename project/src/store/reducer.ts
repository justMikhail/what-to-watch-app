import {Genres} from '../const/const';

import {MOCK_FILMS} from '../mocks/mock-films';

const initialState = {
  selectedGenre: Genres.All,
  filteredFilms: MOCK_FILMS,
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectedGenre:
      return {...state, genre: action.payload};
    case ActionType.FilterFilmsBySelectedGanre:
      return {...state, filteredFilms: FilterFilmsBySelectedGanre(action.payload, state.selectedGenre)};
  }
}
