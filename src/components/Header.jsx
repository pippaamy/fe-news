import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link className="navlink" to="/articles">
      <header>
        <h1>GOOD NEWS</h1>
      </header>
    </Link>
  );
};

export default Header;
