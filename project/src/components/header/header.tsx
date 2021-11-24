import {useDispatch, useSelector} from 'react-redux';

import {logOutAction} from '../../store/api-actions';
import {AppRoute} from '../../const/routs';

import Logo from '../logo/Logo';
import UserBlock from '../user-block/user-block';
import {redirectToRoute} from '../../store/action';
import {getAuthorizationStatus, getUserInfo} from '../../store/user-data-reducer/selectors';
import {AuthorizationStatus} from '../../const/authorization-status';

type HeaderProps = {
  children?: React.ReactNode;
  userPage?: boolean,
  filmCard?: boolean,
}

function Header(props: HeaderProps): JSX.Element {
  const {children, userPage, filmCard} = props;
  const isAuthorizedUser = useSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const className = (`
    page-header
    ${userPage && 'user-page__head'}
    ${filmCard && 'film-card__head'}
  `);

  const onLogInButtonClickHandler = () => {
    dispatch(redirectToRoute(AppRoute.SignIn));
  };

  const onLogOutButtonClickHandler = () => {
    dispatch(logOutAction());
  };

  return (
    <header className={className}>
      <Logo/>
      {children}
      <UserBlock
        isAuthorizedUser={isAuthorizedUser}
        userInfo={userInfo}
        onLogInButtonClickHandler={onLogInButtonClickHandler}
        onLogOutButtonClickHandler={onLogOutButtonClickHandler}
      />
    </header>
  );
}

export default Header;
