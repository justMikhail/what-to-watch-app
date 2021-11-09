import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {selectGenre} from '../../store/action';
import {Genres} from '../../const/const';

import GenreItem from '../genre-item/genre-item';

import {State} from '../../types/state';
import {Actions} from '../../types/actions-types';

const mapStateToProps = ({selectedGenre}: State) => ({
  selectedGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleGenreClick(selectedGenre: string) {
    dispatch(selectGenre(selectedGenre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type GenreListProps = {
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {selectedGenre, handleGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genres).map((genresName) =>
        (
          <GenreItem
            key = {genresName}
            genre = {genresName}
            isActiveGenre = {genresName === selectedGenre}
            //handleGenreClick={handleGenreClick(selectedGenre)}
            onClick={(selectedGenre) => {
              handleGenreClick(selectedGenre);
            }}
          />
        ))}
    </ul>
  );
}

export {GenreList};
export default connector(GenreList);
