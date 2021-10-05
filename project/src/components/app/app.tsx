import MainPage from '../pages/main-page/main-page';

type PromoFilmProps  = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: PromoFilmProps): JSX.Element {
  return (
     <MainPage
       title={title}
       genre={genre}
       year={year}
     />
  )
}

export default App;
