import React from "react";

import { Container, Header, Wrapper } from "./styles";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SettingsIcon from '@material-ui/icons/Settings';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import logoHybroo from "../../assets/img/logo-hybroo.png";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const { page } = props
  return (
    <Container>
      <Header>
        <img src={logoHybroo} alt="Logo" />
      </Header>
      <Wrapper>
        <ul>
          <Link to="/dashboard-home">
            <li className={ page === "dashboard-home" ? "active" : ""}>
              <VideoLibraryRoundedIcon />
              Home
            </li>
          </Link>

          <Link to="/workspaces">
            <li className={ page === "workspaces" ? "active" : ""}>
              <BookmarksIcon />
              Workspaces
            </li>
          </Link>

          <Link to="/applications">
            <li className={ page === "applications" ? "active" : ""}>
              <LibraryBooksRoundedIcon/>
              Applications
            </li>
          </Link>

          <Link to="/recent">
            <li li className={ page === "recent" ? "active" : "" }>
              <SettingsIcon />
              Recent
            </li>
          </Link>

          <Link to="/hybroo">
            <li li className={ page === "hybroo" ? "active" : "" }>
              <EqualizerRoundedIcon />
              About Hybroo
            </li>
          </Link>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;