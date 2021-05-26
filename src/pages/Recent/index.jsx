import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import * as S from "./styles";
import { ResultMethodContext } from "../../context/useResultMethod";
import ListMethods from "./ListMethods";

export default function GettingStarted() {
  const { listMethod } = useContext(ResultMethodContext);

  return (
    <div>
      <Sidebar page="recent" />
      <NavBar />
      <S.Container>
        <S.TitleApp>Recent Applications ({listMethod.length})</S.TitleApp>
        <ListMethods />
      </S.Container>
    </div>
  );
}
