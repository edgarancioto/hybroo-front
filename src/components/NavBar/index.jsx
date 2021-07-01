/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoHybroo from "../../assets/img/logo-hybroo.png";

import {
  Container,
  Logo,
  NotificationIcon,
  MenuUser,
  NotificationIconResult,
  TagNotification,
} from "./styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { WebsocketsContext } from "../../context/useWebsockets";
import { ResultMethodContext } from "../../context/useResultMethod";

export default function NavBar() {
  const [notification, setNotification] = React.useState(null);
  const [listNotification, setlistNotification] = useState([]);
  const [isNotification, setIsNotification] = useState(false);

  const { response } = useContext(WebsocketsContext);
  const { listMethod } = useContext(ResultMethodContext);

  const handleClickNotification = (event) => {
    setNotification(event.currentTarget);
    setIsNotification(false);
  };

  const handleCloseNotification = () => {
    setNotification(null);
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
      </MenuUser>
    </Container>
  );
}
