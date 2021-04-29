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
          <Link to="/getting-started">
            <li className={ page === "getting-started" ? "active" : ""}>
              <VideoLibraryRoundedIcon />
              Getting Started
            </li>
          </Link>

          <Link to="/hybroo">
            <li className={ page === "hybroo" ? "active" : ""}>
              <BookmarksIcon />
              Hybroo
            </li>
          </Link>

          <Link to="/library">
            <li className={ page === "library" ? "active" : ""}>
              <LibraryBooksRoundedIcon/>
              Library
            </li>
          </Link>

          <Link to="/">
            <li>
              <SettingsIcon />
              Settings
            </li>
          </Link>

          <Link to="/">
            <li>
              <EqualizerRoundedIcon />
              Statistical Analysis
            </li>
          </Link>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
