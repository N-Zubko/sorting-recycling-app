import { Outlet, NavLink } from "react-router-dom";

import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="Layout">
        <nav className="Nav">
          <h1>Too Good To Waste</h1>
          <NavLink to="/" className="Nav-link">
            Home
          </NavLink>
          <NavLink to="/instructions" className="Nav-link">
            Instructions
          </NavLink>
          <NavLink to="/game" className="Nav-link">
            Play
          </NavLink>
          <NavLink to="/educational" className="Nav-link">
            Educational Resources
          </NavLink>
          <span className="Nav-link">Log In</span>
        </nav>
        <main className="Layout-main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
