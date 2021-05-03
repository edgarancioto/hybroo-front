import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function DashboardHome() {
  return (
    <div>
      <Sidebar page="dashboard-home" />
      <NavBar />
      <Container>
        <h1>Dashboard Home</h1>
      </Container>
    </div>
  );
}
