export enum Route {
  MAIN = '/',
  SIGN_IN = '/login',
  MY_LIST = '/mylist',
  FILM = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id'
}


export enum ApiRoute {
  Login = '/login',
  Logout = '/Logout',
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
}
