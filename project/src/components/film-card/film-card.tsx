import {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {FilmType} from '../../types/film-type';
import {AppRoute} from '../../const/routs';

import {State} from '../../types/state';

import {Actions} from '../../types/actions-types';
import {setActiveFilmId} from '../../store/action';

import VideoPlayer from '../video-player/video-player';

const mapStateToProps = ({activeFilmId}: State) => ({
  activeFilmId,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  getActiveFilmId(activeFilmId: null | number) {
    dispatch(setActiveFilmId(activeFilmId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type FilmCardProps = {
  film: FilmType,
  activeFilm: FilmType | null,
  setActiveFilm: (film: FilmType | null) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FilmCardProps;

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, activeFilm, setActiveFilm} = props;
  const generatedFilmPagePath = generatePath(AppRoute.Film, {id: film.id});
  const isActiveFilm = activeFilmId !== null && film.id === activeFilmId;

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    getActiveFilmId(film.id);
  };

  const handleMouseLeave = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    getActiveFilmId(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-film-card__link" to={generatedFilmPagePath}>
        <h3 className="small-film-card__title">{film.name}</h3>
        <div className="small-film-card__image">
          <VideoPlayer
            src={film.previewVideoLink}
            poster={film.previewImage}
            isPlaying={isActiveFilm}
          />
        </div>
      </Link>
    </article>
  );
}

export {FilmCard};
export default connector(FilmCard);
