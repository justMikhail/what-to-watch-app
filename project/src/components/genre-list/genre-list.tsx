import {FilmType} from '../../types/film-type';
import {Genres} from '../../const/const';
import GenreItem from '../genre-item/genre-item';
import {connect} from 'react-redux';
import {selectGenre} from '../../store/action';
import {State} from '../../types/state';

type GenreListProps = {
  selectedGenre: string;
  setActiveGenre: any;
}

function GenreList(props: GenreListProps): JSX.Element {
  const {selectedGenre, setActiveGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genres).map((genresName) =>
        (
          <GenreItem
            key = {genresName}
            genre = {genresName}
            isActiveGenre = {genresName === selectedGenre}
            onClick={(selectedGenre) => {
              setActiveGenre(selectedGenre);
            }}
          />
        ))}
    </ul>
  );
}

const mapStateToProps = ({selectedGenre}: State) => ({
  selectedGenre,
});

const mapDispatchToProps = (dispatch: any) => ({
  setActiveGenre: (selectedGenre: string) => dispatch(selectGenre(selectedGenre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
