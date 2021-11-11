import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {selectGenre} from '../../store/action';
import {Genre} from '../../const/const';

import {State} from '../../types/state';
import {Actions} from '../../types/actions-types';

const mapStateToProps = ({selectedGenre}: State) => ({
  selectedGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  setActiveGenre(selectedGenre: string) {
    dispatch(selectGenre(selectedGenre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type GenreListProps = {
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {selectedGenre, setActiveGenre} = props;
  const handleGenreClick = (evt: React.MouseEvent<HTMLAnchorElement>, genre: string) => { //todo Why DOM MouseEvent<HTMLAnchorElement> dont work?
    evt.preventDefault();
    setActiveGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {[...Object.values(Genre)].map((genresName) => {
        const isActiveGenre = genresName === selectedGenre;

        return (
          <li className={`catalog__genres-item ${isActiveGenre ? 'catalog__genres-item--active' : ''}`} key={genresName}>
            <a
              className="catalog__genres-link"
              href="./"
              onClick={(evt) => handleGenreClick(evt, genresName)}
            >
              {genresName}
            </a>
          </li>
        );},
      )}
    </ul>
  );
}

export {GenreList};
export default connector(GenreList);
