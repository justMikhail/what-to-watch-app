import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppRout} from '../../const/routs';
import {AuthorizationStatus} from '../../const/authorization-status';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({exact, path, render, authorizationStatus} : PrivateRouteProps): JSX.Element {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRout.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
