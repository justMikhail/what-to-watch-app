type PrimaryButtonType = {
  children?: React.ReactNode;
  buttonText: string;
  handleButtonClick: () => void;
}

function PrimaryButton(props: PrimaryButtonType): JSX.Element {
  const {children, buttonText, handleButtonClick} = props ;

  return  (
    <button className="btn btn--play film-card__button" type="button" onClick={handleButtonClick}>
      {children}
      <span>
        {buttonText}
      </span>
    </button>
  );
}

export default PrimaryButton;
