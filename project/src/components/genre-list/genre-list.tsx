import {useDispatch, useSelector} from 'react-redux';
import {selectGenre} from '../../store/action';

import {getGenresFromFilmList} from '../../utils/utils';
import {getAllFilmsData, getSelectedGenre} from '../../store/all-films-data/selectors';

// type GenreListProps = {
// }

function GenreList(): JSX.Element {
  const genres = getGenresFromFilmList(useSelector(getAllFilmsData));
  const selectedGenre = useSelector(getSelectedGenre);
  const dispatch = useDispatch();


  const handleGenreClick = (evt: React.MouseEvent<HTMLAnchorElement>, selected: string) => {
    evt.preventDefault();
    dispatch(selectGenre(selected));
  };

  return (
    <ul className="catalog__genres-list">
      {(genres).map((genresName) => {
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

export default GenreList;
