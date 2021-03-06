import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {createApi} from './services/api';
import {rootReducer} from './store/root-reducer';
import {requireAuthorizationStatus} from './store/action';
import {redirect} from './middlewares/redirect';
import {AuthorizationStatus} from './const/authorization-status';

import App from './components/app/app';

const api = createApi(
  () => store.dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

