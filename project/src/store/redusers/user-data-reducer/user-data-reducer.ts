import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../../../const/authorization-status';
import {UserData} from '../../../types/state';
import {
  requireAuthorizationStatus,
  requireLogout,
  setUserInfo,
  setFavoriteFilmsListAction
} from '../../action';

const initialState: UserData = {
  userAuthorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  userFavoriteFilmsList: [],
};

export const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorizationStatus, (state, action) => {
      state.userAuthorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.userAuthorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setFavoriteFilmsListAction, (state, action) => {
      state.userFavoriteFilmsList = action.payload;
    });
});
