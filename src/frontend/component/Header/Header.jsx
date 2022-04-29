import "./Header.css";
import { Logo } from "../Logo/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { AUTH_TOKEN } from "../../constants";

function Header(){
  const { isAuth , setIsAuth } = useAuth();
  
  const logoutHandler = () => {
      localStorage.removeItem(AUTH_TOKEN)
      setIsAuth({status:false})
  }
  const navigate = useNavigate();
  const location = useLocation();
  
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
        { !isAuth.status ? 
          <>
             <button onClick={() => navigate("/signin", { state: { from: location } })} className="eplaybtn eplaybtn-primary"> Sign in </button>
             <button onClick={() => navigate("/signup", { state: { from: location } })} className="eplaybtn eplaybtn-secondary"> Sign up </button>
          </> :
           <button className="eplaybtn eplaybtn-secondary" onClick={logoutHandler} > Logout </button> 
          }
        </div>
       
       
      </nav>
    </div>
  );
}

export { Header };
