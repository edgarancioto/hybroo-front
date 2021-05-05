import React from "react";
import Routes from "./routes/Routes";
import { WebsocketsProvider } from "./context/useWebsockets";

function App() {
  return (
    <WebsocketsProvider>
      <Routes />
    </WebsocketsProvider>
  );
}

export default App;
