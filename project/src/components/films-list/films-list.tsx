import {useState} from 'react';

import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';

type FilmListProps = {
  films: FilmType[],
}

function FilmsList(props: FilmListProps): JSX.Element {
  const {films} = props;
  const [, setActiveFilm] = useState<FilmType | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard
            film={film}
            setActiveFilm={setActiveFilm}
            key={film.id}
          />
        ),
      )}
    </div>
  );
}

export default FilmsList;
