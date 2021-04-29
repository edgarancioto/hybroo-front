import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function GettingStarted() {
  return (
    <div>
      <Sidebar page="getting-started" />
      <NavBar />
      <Container>
        <h1>Getting Started</h1>
      </Container>
    </div>
  );
}
