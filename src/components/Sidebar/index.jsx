import React, { useState, useContext, useEffect } from "react";

import logoHybroo from "../../assets/img/logo-hybroo.png";
import { Link } from "react-router-dom";
import avatarIcon from "../../assets/img/avatar-img.png";
import firebase from "../../auth/config";
import { AuthContext } from "../../context/useAuthContext";
import { WebsocketsContext } from "../../context/useWebsockets";

function Sidebar(props) {
  const { page } = props;
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const { userName } = useContext(AuthContext);
  const { response } = useContext(WebsocketsContext);

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver":
        setIsNotification(true);
        break;

      case "instances_solver_results":
        setIsNotification(true);
        break;

      default:
        break;
    }
  }, [response]);

  useEffect(() => {
    if(page === "recent") {
      setIsNotification(false);
    }
  }, [page])

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleLogOut = () => {
    firebase.auth().signOut();
  };

  const clearNotification = () => {
    setIsNotification(false);
  };

  return (
    <div className={openSideBar ? "sidebar open" : "sidebar"}>
      <div class="logo-details">
        <div class="logo_name">
          <Link to="/">
            <img src={logoHybroo} alt="Logo Hybroo" />
          </Link>
        </div>
        <i
          className={openSideBar ? "bx bx-menu-alt-right" : "bx bx-menu"}
          onClick={() => handleSideBar()}
          id="btn"
        ></i>
      </div>
      <ul class="nav-list">
        <li>
          <Link to="/">
            <i class="bx bx-home"></i>
            <span class="links_name">Home</span>
          </Link>
          <span class="tooltip">Home</span>
        </li>
        <li className={page === "app" ? "active" : ""}>
          <Link to="/applications">
            <i class="bx bx-grid-alt"></i>
            <span class="links_name">Applications</span>
          </Link>
          <span class="tooltip">Applications</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-user"></i>
            <span class="links_name">User</span>
          </a>
          <span class="tooltip">User</span>
        </li>

        <li>
          <a href="#">
            <i class="bx bx-pie-chart-alt-2"></i>
            <span class="links_name">Simulation</span>
          </a>
          <span class="tooltip">Simulation</span>
        </li>
        <li className={page === "recent" ? "active" : ""}>
          <Link
            to="/recent"
            className={isNotification ? "notification" : ""}
            onClick={() => clearNotification()}
          >
            <i class="bx bx-folder"></i>
            <span class="links_name">Recents</span>
          </Link>
          <span class="tooltip">Recents</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-cog"></i>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>
        <li class="profile">
          <div class="profile-details">
            <img src={avatarIcon} alt="profileImg" />
            <div class="name_job">
              <div class="name">{userName}</div>
            </div>
          </div>
          <i
            class="bx bx-log-out"
            id="log_out"
            onClick={() => handleLogOut()}
          ></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
