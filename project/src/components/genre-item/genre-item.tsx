type GenreItemProp = {
  genre: string;
  isActiveGenre: boolean;
  onClick: (genre: string) => void;
}

function GenreItem(props: GenreItemProp): JSX.Element {
  const {genre, isActiveGenre, onClick} = props;

  return (
    <li
      className={`catalog__genres-item ${isActiveGenre ? 'catalog__genres-item--active' : ''}`}
      onClick={() => onClick(genre)}
    >
      <a className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreItem;
