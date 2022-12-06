import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}> Home </Link>
        <Link to={"/"}> User </Link>
      </nav>
    </header>
  );
};

export default Header;
