import {Route, Redirect, RouteProps} from 'react-router-dom';
import {Routs} from '../../const/appRout';
import {AuthorizationStatus} from '../../const/authorization-status';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({exact, path, render, authorizationStatus} : PrivateRouteProps): JSX.Element {
  return (
    <Routs
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={Routs.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
