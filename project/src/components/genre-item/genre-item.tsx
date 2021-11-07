type GenreItemProp = {
  genre: string;
}

function GenreItem(props: GenreItemProp): JSX.Element {
  const {genre} = props;

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreItem;
