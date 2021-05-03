import React, { useState, useEffect } from "react";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import {
  Container,
  TitleApp,
  Card,
  ContainerCard,
  FunctionSelected,
} from "./styles";
import FunctionsOutlinedIcon from "@material-ui/icons/FunctionsOutlined";
import FunctionsProblems from "./FunctionsProblems";
import InstanceProblems from "./InstancesProblems";

export default function PageHybroo() {
  const [ws, setWs] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [selectApplications, setSelectApplications] = useState(3);

  const handleSelected = (event) => {
    setSelectApplications(event);
  };

  function enterSocket() {
    let ws = new WebSocket("wss://hybroo2.herokuapp.com/0.0.0.0");

    ws.onopen = (evt) => {
      console.log("Websocket opened!", { evt });
      setWs(ws);
    };

    ws.onclose = (evt) => {
      console.log("Websocket closed!", { evt });
      setWs(undefined);
    };

    ws.onmessage = (msg) => {
      setMessages(JSON.parse(msg.data));
    };

    ws.onerror = (error) => {
      console.log("Websocket error:", { error });
    };
  }

  function sendMessage(msg) {
    if (ws) {
      ws.send(msg);
    } else {
      enterSocket();
    }
  }

  function getNamesFunction() {
    const functionName = JSON.stringify({
      task: "functions_names",
      params: "None",
    });
    sendMessage(functionName);
  }

  useEffect(() => {
    enterSocket();
  }, []);

  useEffect(() => {
    if (!ws) return;
    ws.onmessage = (msg) => {
      setMessages(JSON.parse(msg.data));
    };
  }, [ws]);

  return (
    <div>
      <Sidebar page="hybroo" />
      <NavBar />
      <Container>
        <TitleApp>Applications</TitleApp>

        <ContainerCard>
          <Card
            onClick={() => {
              handleSelected(0);
              getNamesFunction();
            }}
            className={selectApplications === 0 ? "select" : "card"}
          >
            <FunctionsOutlinedIcon />
            <div>Functions Problems</div>
          </Card>

          <Card
            onClick={() => handleSelected(1)}
            className={selectApplications === 1 ? "select" : "card"}
          >
            <FunctionsOutlinedIcon />
            <div>Instances Problems</div>
          </Card>
        </ContainerCard>
        <FunctionSelected>
          {selectApplications === 0 && (
            <FunctionsProblems sendMessage={sendMessage} response={messages} />
          )}
          {selectApplications === 1 && <InstanceProblems />}
        </FunctionSelected>
      </Container>
    </div>
  );
}
