import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <ul className="sidebar-list">
        <li className="sidebar-list-item" >
            <span className="material-icons-outlined">home</span> 
            Home
        </li>
        <li className="sidebar-list-item" >
            <span className="material-icons-outlined">explore</span>
            Explore
        </li>
        <li className="sidebar-list-item" >
            <span className="material-icons-outlined">watch_later</span>
            Watch Later
        </li>
        <li className="sidebar-list-item" >
            <span className="material-icons-outlined">thumb_up</span> 
            Liked Videos
        </li>
        <li className="sidebar-list-item" >
            <span className="material-icons-outlined">history</span>
            History
        </li>
        
      </ul>
    </aside>
  );
}

export { Sidebar };
