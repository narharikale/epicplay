import "./Header.css";
import { Logo } from "../Logo/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useFilter, useSidebar, useTheme } from "../../context";
import { AUTH_TOKEN } from "../../constants";

function Header(){
  const { isAuth , setIsAuth } = useAuth();
  const { themeToggle, theme } = useTheme();
  const { sidebarDisplay , setSidebarDisplay } = useSidebar();
  const { setSearchQuery } = useFilter()



  const logoutHandler = () => {
      localStorage.removeItem(AUTH_TOKEN)
      setIsAuth(
      {
        status:false ,
        token:null
      })
  }
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="header-main">
      <nav className="header header-container">
        <div className="d-flex gap-1 align-center">
        <div className="menu-btn" onClick={ () => setSidebarDisplay(!sidebarDisplay) }>
            { location.pathname !== '/' && ( sidebarDisplay ? <button className="material-icons ">clear</button> : <button className="material-icons">menu</button> 
              )
            }
          
          </div>
          <div className="logo" onClick={ () =>  navigate('/') }>
            <Logo />
          </div>
        </div>
        

        <div className="d-flex searchbar-container">
          <div className="searchbar">
            <button className="d-flex">
              <span className="material-icons-sharp">search</span>
            </button>
            <input type="text" 
              onChange={(e)=> {
              navigate('/explore')
              setSearchQuery(e.target.value)}} />
          </div>
        </div>

        <div className="header-right-container">
          <button className="icon-btn" onClick={themeToggle}>
            {" "}
            {theme === "dark" ? (
              <span title="Light Mode" className="material-icons toggle-mode">
                light_mode
              </span>
            ) : (
              <span title="Dark Mode" className="material-icons toggle-mode1">
                dark_mode
              </span>
            )}
          </button>
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
