export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}


export enum ApiRoute {
  Login = '/login',
  Logout = '/Logout',
  Films = '/films',
  SimilarFilms = '/films/:id/similar',
  FilmComments = '/comments/:id',
  Promo = '/promo',
  Favorite = '/favorite',
}
