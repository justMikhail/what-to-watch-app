type PrimaryButtonType = {
  children?: React.ReactNode;
  buttonText: string;
  onButtonClickHandler: () => void;
}

function PrimaryButton(props: PrimaryButtonType): JSX.Element {
  const {children, buttonText, onButtonClickHandler} = props ;

  return  (
    <button className="btn btn--play film-card__button" type="button" onClick={onButtonClickHandler}>
      {children}
      <span>
        {buttonText}
      </span>
    </button>
  );
}

export default PrimaryButton;
