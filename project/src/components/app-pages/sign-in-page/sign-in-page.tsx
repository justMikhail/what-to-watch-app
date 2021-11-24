import {useRef, FormEvent} from 'react';
import {useDispatch} from 'react-redux';

import {logInAction} from '../../../store/api-actions';
import Logo from '../../logo/Logo';

function SignInPage(): JSX.Element {
  const dispatch = useDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(logInAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="userEmail"
                id="userEmail"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="userEmail">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="userPassword"
                id="userPassword"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="userPassword">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <Logo isLight/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInPage;
