import "./header.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to={'/'} className="home-link">Home</Link>
          <Link to={'/about'} className="about-link">About</Link>
        </div>
      </div>
    </header>
  );
}
