//import {useState} from 'react';

import {FilmType} from '../../types/film-type';

import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: FilmType[];
}

function FilmsList(props: FilmListProps): JSX.Element {
  const {films} = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard
            key={film.id}
            film={film}
          />
        ),
      )}
    </div>
  );
}

export default FilmsList;
