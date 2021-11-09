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
      onClick={(evt) => {
        evt.preventDefault();
        onClick(genre);
      }}
    >
      <span className="catalog__genres-link">{genre}</span>
    </li>
  );
}

export default GenreItem;
