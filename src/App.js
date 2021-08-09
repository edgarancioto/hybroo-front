import React from "react";
import Routes from "./routes/Routes";
import { WebsocketsProvider } from "./context/useWebsockets";
import { ResultMethodProvider } from "./context/useResultMethod";
import { AuthProvider } from "./context/useAuthContext";

function App() {
  return (
    <AuthProvider>
      <WebsocketsProvider>
        <ResultMethodProvider>
          <Routes />
        </ResultMethodProvider>
      </WebsocketsProvider>
    </AuthProvider>
  );
}

export default App;
