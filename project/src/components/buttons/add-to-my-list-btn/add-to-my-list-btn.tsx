function AddToMyListBtn(): JSX.Element {

  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
}

export default AddToMyListBtn;
