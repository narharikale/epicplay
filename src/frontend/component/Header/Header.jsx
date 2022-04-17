import "./Header.css";
import { Logo } from "../Logo/Logo";

function Header() {
  return (
    <div>
      <nav className="header header-container">
        <div className="logo">
          <Logo />
        </div>

        <div className="d-flex searchbar-container">
          <div className="searchbar">
            <button className="d-flex">
              <span className="material-icons-sharp">search</span>
            </button>
            <input type="text" />
          </div>
        </div>
        
        <div className="header-right-container">
          <button className="eplaybtn eplaybtn-primary">Sign in</button>
          <button className="eplaybtn eplaybtn-secondary">Sign up</button>
        </div>
      </nav>
    </div>
  );
}

export { Header };
