import React from "react";

import { Container, Header, Wrapper } from "./styles";
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import logoHybroo from "../../assets/img/logo-hybroo.png";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const { page } = props
  return (
    <Container>
      <Header>
      <Link to="/"><img src={logoHybroo} alt="Logo" /> </Link>
      </Header>
      <Wrapper>
        <ul>
          <Link to="/">
            <li className={ page === "dashboard-home" ? "active" : ""}>
              <VideoLibraryRoundedIcon />
              Home
            </li>
          </Link>

          <Link to="/applications">
            <li className={ page === "app" ? "active" : ""}>
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
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
