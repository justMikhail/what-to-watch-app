import Logo from '../logo/Logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isLight/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
