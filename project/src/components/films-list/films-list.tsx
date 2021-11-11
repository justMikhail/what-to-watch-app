import {useState} from 'react';
import { connect } from 'react-redux';
import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';
import {State} from '../../types/state';
import {filterFilmsBySelectedGenre} from '../../utils/utils';

type FilmListProps = {
  films: FilmType[],
}

function FilmsList(props: FilmListProps): JSX.Element {
  const {films} = props;
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard
            film={film}
            activeFilm={activeFilm}
            setActiveFilm={setActiveFilm}
            key={film.id}
          />
        ),
      )}
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  films: filterFilmsBySelectedGenre(state.allFilmsData, state.selectedGenre),
});

export default connect(mapStateToProps)(FilmsList);
