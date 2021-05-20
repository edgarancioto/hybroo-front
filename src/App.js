import React from "react";
import Routes from "./routes/Routes";
import { WebsocketsProvider } from "./context/useWebsockets";
import { ResultMethodProvider } from "./context/useResultMethod";

function App() {
  return (
    <WebsocketsProvider>
      <ResultMethodProvider>
        <Routes />
      </ResultMethodProvider>
    </WebsocketsProvider>
  );
}

export default App;
