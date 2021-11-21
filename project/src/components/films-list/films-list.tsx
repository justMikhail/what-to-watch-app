import {useSelector} from 'react-redux';

import {filterFilmsBySelectedGenre} from '../../utils/utils';

import FilmCard from '../film-card/film-card';
import {getAllFilmsData, getSelectedGenre} from '../../store/all-films-data/selectors';

// type FilmListProps = {
// }

function FilmsList(): JSX.Element {
  const selectedGenre = useSelector(getSelectedGenre);
  const filmForRender = filterFilmsBySelectedGenre(useSelector(getAllFilmsData), selectedGenre);

  return (
    <div className="catalog__films-list">
      {filmForRender.map((film) =>
        (
          <FilmCard
            film={film}
            key={film.id}
          />
        ),
      )}
    </div>
  );
}

export default FilmsList;
