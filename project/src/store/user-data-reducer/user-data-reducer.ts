import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../../const/authorization-status';
import {UserData} from '../../types/state';
import {
  requireAuthorizationStatus,
  requireLogout,
  setUserInfo
} from '../action';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

export const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});
