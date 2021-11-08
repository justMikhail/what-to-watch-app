import {connect} from 'react-redux';
import {selectGenre} from '../../store/action';
import {State} from '../../types/state';
import {Genres} from '../../const/const';

import GenreItem from '../genre-item/genre-item';

type GenreListProps = {
  selectedGenre: string;
  handleGenreClick : any;
}

function GenreList(props: GenreListProps): JSX.Element {
  const {selectedGenre, handleGenreClick } = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genres).map((genresName) =>
        (
          <GenreItem
            key = {genresName}
            genre = {genresName}
            isActiveGenre = {genresName === selectedGenre}
            onClick={(selectedGenre) => {
              handleGenreClick(selectedGenre);
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
  handleGenreClick : (selectedGenre: string) => dispatch(selectGenre(selectedGenre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
