/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoHybroo from "../../assets/img/logo-hybroo.png";
import avatarIcon from "../../assets/img/avatar-img.png";
import firebase from "../../auth/config";

import {
  Container,
  Logo,
  NotificationIcon,
  MenuUser,
  NotificationIconResult,
  TagNotification,
  User,
  Avatar,
  Info,
} from "./styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { WebsocketsContext } from "../../context/useWebsockets";
import { ResultMethodContext } from "../../context/useResultMethod";
import { AuthContext } from "../../context/useAuthContext";

export default function NavBar() {
  const [userNav, setUserNav] = React.useState(null);
  //const [user, setUser] = React.useState(null);
  const [notification, setNotification] = React.useState(null);
  const [listNotification, setlistNotification] = useState([]);
  const [isNotification, setIsNotification] = useState(false);

  const { response } = useContext(WebsocketsContext);
  const { listMethod } = useContext(ResultMethodContext);
  const { userName } = useContext(AuthContext);

//  // const user = firebase.auth().currentUser;

//   useEffect(()=>{
//     setUser(firebase.auth().currentUser);
//   },[])

  const handleClickNotification = (event) => {
    setNotification(event.currentTarget);
    setIsNotification(false);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  const handleClick = (event) => {
    setUserNav(event.currentTarget);
  };
  const handleClose = () => {
    setUserNav(null);
  };

  const handleLogOut = () => {
    firebase.auth().signOut();
    setUserNav(null);
  };

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver_results":
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
    let newList = [];

    if (listMethod.length <= 0) return;
    newList.push({
      name: listMethod[listMethod.length - 1].name,
      hours: listMethod[listMethod.length - 1].hours,
    });

    setlistNotification(newList);
  }, [listMethod]);

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logoHybroo} alt="Hybroo" />
        </Link>
      </Logo>

      <MenuUser>
        <Button
          aria-controls="notification"
          aria-haspopup="true"
          onClick={handleClickNotification}
        >
          {!isNotification ? (
            <NotificationIcon />
          ) : (
            <TagNotification>
              <NotificationIconResult />
            </TagNotification>
          )}
        </Button>

        <Menu
          id="notification"
          anchorEl={notification}
          keepMounted
          open={Boolean(notification)}
          onClose={handleCloseNotification}
        >
          {listNotification.length > 0 ? (
            listNotification.map((item) => {
              return (
                <Link to="/recent">
                  <MenuItem>
                    {item.name} - {item.hours}
                  </MenuItem>
                </Link>
              );
            })
          ) : (
            <MenuItem>empty</MenuItem>
          )}
        </Menu>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <User>
            <Avatar>
              <img src={avatarIcon} alt="avatar" />
            </Avatar>
            <Info>
              <span>{userName}</span>
            </Info>
          </User>
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={userNav}
          keepMounted
          open={Boolean(userNav)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </MenuUser>
    </Container>
  );
}
