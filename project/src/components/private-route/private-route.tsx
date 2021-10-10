import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const/app-route';
import {AuthorizationStatus} from '../../const/const';

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
        authorizationStatus === AuthorizationStatus.AUTH
          ? render()
          : <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
}

export default PrivateRoute;