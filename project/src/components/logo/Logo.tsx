import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/routs';

type LogoProps = {
  isLight?: boolean,
};

function Logo({isLight} : LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link
        className={`${isLight ? 'logo__link logo__link--light' : 'logo__link'}`}
        to={AppRoute.Main}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
