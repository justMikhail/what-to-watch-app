import {UserInfoType} from '../../types/user-info-type';

type UserBlockProps = {
  isAuthorizedUser: boolean;
  userInfo: UserInfoType;
  onLogInButtonClickHandler: () => void;
  onLogOutButtonClickHandler: () => void;
  onUserAvatarButtonClick: () => void;
}

function UserBlock(props: UserBlockProps): JSX.Element {
  const {
    isAuthorizedUser,
    userInfo,
    onLogInButtonClickHandler,
    onLogOutButtonClickHandler,
    onUserAvatarButtonClick,
  } = props;

  const avatarPlaceholder = 'https://via.placeholder.com/63';

  const forAuthorizedUserView = (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={onUserAvatarButtonClick}>
          <img
            src={userInfo ? userInfo.avatarUrl : avatarPlaceholder}
            alt="User avatar"
            width="63" height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        <a href="#" className="user-block__link" onClick={onLogOutButtonClickHandler}>
          Sign out
        </a>
      </li>
    </ul>
  );

  const forNoAuthorizedUserView = (
    <div className="user-block">
      <span className="user-block__link" onClick={onLogInButtonClickHandler}>
        Sign in
      </span>
    </div>
  );

  return (
    isAuthorizedUser
      ? forAuthorizedUserView
      : forNoAuthorizedUserView
  );
}

export default UserBlock;
