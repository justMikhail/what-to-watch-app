import {Middleware} from 'redux';

import browserHistory from '../browser-history';
import {ActionType} from '../types/actions-types';
import {State} from '../types/state';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
