import React from "react";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function PageLibrary() {
  
  return (
    <div>
      <Sidebar page="library" />
      <NavBar />
      <Container>
        <h1>Library</h1>
      </Container>
    </div>
  );
}
