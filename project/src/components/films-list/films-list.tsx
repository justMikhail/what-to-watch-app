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
      <FilmCard film={films[0]}/>
      <FilmCard film={films[1]}/>
      <FilmCard film={films[2]}/>
    </div>
  );
}

export default FilmsList;
