import React, { createContext, useEffect, useState, useContext } from "react";
import { WebsocketsContext } from "../context/useWebsockets";

const initialValue = {
  resultMethod: {},
};
export const ResultMethodContext = createContext(initialValue);

export const ResultMethodProvider = ({ children }) => {
  const { response } = useContext(WebsocketsContext);

  const [resultMethod, setResultMethod] = useState({});

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver_results":
        setResultMethod(response);
        break;

      default:
        break;
    }
  }, [response]);

  return (
    <ResultMethodContext.Provider value={{ resultMethod }}>
      {children}
    </ResultMethodContext.Provider>
  );
};
