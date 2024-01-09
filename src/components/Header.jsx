import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link className="navlink" to="/articles">
      <header className=" p-6 text-center text-4xl font-mono text-[#F67280]">
        <h1>GOOD NEWS </h1>
      </header>
    </Link>
  );
};

export default Header;
