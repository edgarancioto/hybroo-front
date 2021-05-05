import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function GettingStarted() {
  return (
    <div>
      <Sidebar page="recent" />
      <NavBar />
      <Container>
        <h1>Recents - applicações recentes</h1>
      </Container>
    </div>
  );
}
