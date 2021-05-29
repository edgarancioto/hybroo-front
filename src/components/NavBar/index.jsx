import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoHybroo from "../../assets/img/logo-hybroo.png";

import {
  Container,
  Logo,
  NotificationIcon,
  MenuUser,
} from "./styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { WebsocketsContext } from "../../context/useWebsockets";



export default function NavBar() {

  const [notification, setNotification] = React.useState(null);
  const [listNotification, setlistNotification] = useState([]);

  const { response } = useContext(WebsocketsContext);

  const handleClickNotification = (event) => {
    setNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver_results":
        
        break;

      default:
        break;
    }
  }, [response]);

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
          <NotificationIcon />
        </Button>

        <Menu
          id="notification"
          anchorEl={notification}
          keepMounted
          open={Boolean(notification)}
          onClose={handleCloseNotification}
          
        >
          <MenuItem>empty</MenuItem>
        </Menu>

      </MenuUser>
    </Container>
  );
}
