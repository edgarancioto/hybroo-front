import React, { createContext, useEffect, useState } from "react";

const initialValue = {
  ws: undefined,
  enterSocket: null,
  response: [],
  sendMessage: null,
};
export const WebsocketsContext = createContext(initialValue);

export const WebsocketsProvider = ({ children }) => {
  const [ws, setWs] = useState(undefined);
  const [response, setResponse] = useState([]);
  const API_WEBSOCKET = "wss://hybroo2.herokuapp.com/0.0.0.0";

  const initialSendMsg = JSON.stringify({
    task: "home_info",
    params: "None",
  });

  function enterSocket() {
    let ws = new WebSocket(API_WEBSOCKET);

    ws.onopen = (evt) => {
      console.log("Websocket opened!", { evt });
      setWs(ws);
    };

    ws.onclose = (evt) => {
      console.log("Websocket closed!", { evt });
      setWs(undefined);
    };

    ws.onmessage = (msg) => {
      setResponse(JSON.parse(msg.data));
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

  useEffect(() => {
    enterSocket();
  }, []);

  useEffect(() => {
    if (!ws) return;
    ws.onmessage = (msg) => {
      setResponse(JSON.parse(msg.data));
    };
    
    if(response === []) return;
    ws.send(initialSendMsg); 
  }, [ws]);

  return (
    <WebsocketsContext.Provider
      value={{ ws, response, enterSocket, sendMessage }}
    >
      {children}
    </WebsocketsContext.Provider>
  );
};
