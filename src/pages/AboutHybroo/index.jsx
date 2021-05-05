import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function AboutHybroo() {
  return (
    <div>
      <Sidebar page="hybroo" />
      <NavBar />
      <Container>
        <h1>Sobre a hybroo e equipe</h1>
      </Container>
    </div>
  );
}
