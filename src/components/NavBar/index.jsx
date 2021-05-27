import React from "react";
import { Link } from "react-router-dom";
import logoHybroo from "../../assets/img/logo-hybroo.png";
import avatarIcon from "../../assets/img/avatar-img.png";

import {
  Container,
  Logo,
  User,
  Avatar,
  Info,
  NotificationIcon,
  MenuUser,
} from "./styles";
import { Button, Menu, MenuItem } from "@material-ui/core";

export default function NavBar() {
  const [user, setUser] = React.useState(null);
  const [notification, setNotification] = React.useState(null);

  const handleClick = (event) => {
    setUser(event.currentTarget);
  };

  const handleClose = () => {
    setUser(null);
  };

  const handleClickNotification = (event) => {
    setNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

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
          <MenuItem onClick={handleClose}>example of a notification</MenuItem>
        </Menu>

      </MenuUser>
    </Container>
  );
}
