import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="navbody">
      <nav className="navcontent">
      <Link to="/profile">Profile</Link>
        <span className="navseparator">
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </span>
        &nbsp;&nbsp;{" "}
        <Link to="/TaskFolder">Task Folder</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </div>
  );
}
