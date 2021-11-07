import {FilmType} from '../../types/film-type';
import {Genres} from '../../const/const';
import GenreItem from '../genre-item/genre-item';

type GenreListProps = {
  //allFilms: FilmType
}

function GenreList(props: GenreListProps): JSX.Element {
  //{allFilms, selectedGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genres).map((genresName) =>
        (
          <GenreItem
            key = {genresName}
            genre = {genresName}
          />
        ))}
    </ul>
  );
}

export default GenreList;
