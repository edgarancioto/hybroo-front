import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import * as S from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { ResultMethodContext } from "../../context/useResultMethod";

export default function GettingStarted() {
  const {listMethod, storegeMethods } = useContext(ResultMethodContext)

  console.log(listMethod)

  return (
    <div>
      <Sidebar page="recent" />
      <NavBar />
      <S.Container>
        <S.TitleApp>Recent Applications (01)</S.TitleApp>

        <S.RecentContainer>
          <S.RecentTittle>
            <S.ListMethod>
              <S.TitleMethod>
                <input type="checkbox" id="task1" />
                <span>Ackley N. 2 Function</span>
              </S.TitleMethod>
              <S.DataMethod>
                <span>23:00</span>
                <span>23/05/2021</span>
                <DeleteIcon />
              </S.DataMethod>
            </S.ListMethod>
          </S.RecentTittle>
          {/* <S.RecentContent>

          </S.RecentContent> */}
        </S.RecentContainer>

        
      </S.Container>
    </div>
  );
}
