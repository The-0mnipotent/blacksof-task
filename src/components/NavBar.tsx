import { FunctionComponent } from "react";
import "./NavBar.css";

export type NavBarType = {
  className?: string;
};
 
const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  return (
    <header className={`nav-bar ${className}`}>
      <div className="yr-male">
        <div className="mathew-thomas">
          <img
            className="statuspage-icon"
            loading="lazy"
            alt=""
            src="/statuspage.svg"
          />
          <a className="smart-lights">smart Lights</a>
        </div>
        <div className="links-parent">
          <nav className="links">
            <a className="home">Home</a>
            <a className="products">Products</a>
            <div className="software-services-wrapper">
              <a className="software-services">Software Services</a>
            </div>
          </nav>
          <button className="button-2">
            <div className="email-placeholder">
              <a className="login">Login</a>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
