import { NavLink } from "react-router-dom";
import { usePlaylists } from "../../context";
import "./Sidebar.css";

function Sidebar() {

  const { playlistState  } = usePlaylists();
  
  return (
    <aside className="sidebar-container">
      <div className="sidebar-list">
        <NavLink to="/" className="sidebar-list-item" >
            <span className="material-icons-outlined">home</span> 
            Home
        </NavLink>
        <NavLink to="/explore" className="sidebar-list-item" >
            <span className="material-icons-outlined">explore</span>
            Explore
        </NavLink>
        <NavLink to="/watchlater" className="sidebar-list-item" >
            <span className="material-icons-outlined">watch_later</span>
            Watch Later
        </NavLink>
        <NavLink to="/likedvideos" className="sidebar-list-item" >
            <span className="material-icons-outlined">thumb_up</span> 
            Liked Videos
        </NavLink>
        <NavLink to="/history" className="sidebar-list-item" >
            <span className="material-icons-outlined">history</span>
            History
        </NavLink>
         { playlistState && playlistState.map( (playlist) => {
            return (
              <NavLink key={playlist._id} to={`/playlist/${playlist._id}`} className="sidebar-list-item" >
                <span className="material-icons-outlined">playlist_play</span>
                  {playlist.title}
              </NavLink>
            )
            })
        }
      </div>
    </aside>
  );
}

export { Sidebar };
