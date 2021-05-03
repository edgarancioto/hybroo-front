import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function Workspaces() {
  return (
    <div>
      <Sidebar page="workspaces" />
      <NavBar />
      <Container>
        <h1>Workspaces</h1>
      </Container>
    </div>
  );
}
