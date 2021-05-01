import React, { useState, useEffect } from "react";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container, TitleApp, Card, ContainerCard, CardFunction } from "./styles";
import FunctionsOutlinedIcon from "@material-ui/icons/FunctionsOutlined";

export default function PageHybroo() {
  const [ws, setWs] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [functionNames, setFunctionNames] = useState("");

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
      console.log("Websocket message:", { msg });
      setMessages(JSON.parse(msg.data));
      console.log(JSON.parse(msg.data));
    };

    ws.onerror = (error) => {
      console.log("Websocket error:", { error });
    };
  }

  function sendMessage() {
    var msg = JSON.stringify({ task: "functions_names", params: "None" });
    ws.send(msg);
  }

  const handleChange = (event) => {
    setFunctionNames(event.target.value);
  };

  useEffect(() => {
    enterSocket();
    if (ws !== undefined) {
      sendMessage();
    }
  }, []);

  return (
    <div>
      <Sidebar page="hybroo" />
      <NavBar />
      <Container>
        <TitleApp>Applications</TitleApp>

        <ContainerCard>
          <Card className="select">
            <FunctionsOutlinedIcon />
            <div>Functions Problems</div>
          </Card>

          <Card>
            <FunctionsOutlinedIcon />
            <div>Intances Problems</div>
          </Card>

          <CardFunction>

          </CardFunction>
        </ContainerCard>
      </Container>
    </div>
  );
}
