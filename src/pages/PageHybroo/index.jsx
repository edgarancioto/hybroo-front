import React, { useState } from "react";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function PageHybroo() {
  const [ws, setWs] = useState(undefined);
  //const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //const socket = new WebSocket("wss://hybroo2.herokuapp.com/0.0.0.0"); // Local: "ws://localhost:5000"

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
    var msg = JSON.stringify({ task: "functions_details", params:  { 'function_id': 4 } });
    ws.send(msg);

  }

  return (
    <div>
      <Sidebar page="hybroo" />
      <NavBar />
      <Container>
        <h1>Hybroo</h1>

        <button
          type="button"
          onClick={() => (ws ? sendMessage() : enterSocket())}
        >
          {ws ? "Send" : "Enter"}
        </button>
      </Container>
    </div>
  );
}
