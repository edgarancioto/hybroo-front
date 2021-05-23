/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState, useContext } from "react";
import { WebsocketsContext } from "../context/useWebsockets";
import usePersistedState from "../helpers/usePersistedState";

const initialValue = {
  resultMethod: {},
  listMethod: [],
  storegeMethods: [],
};
export const ResultMethodContext = createContext(initialValue);

export const ResultMethodProvider = ({ children }) => {
  const { response } = useContext(WebsocketsContext);

  const [listMethod, setListMethod] = useState([]);
  const [storegeMethods, setStoregeMethods] = usePersistedState("methods", []);
  //const [resultMethod, setResultMethod] = useState(storegeMethods);

  function novaHora() {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var date = new Date();
    return [date.getHours(), date.getMinutes()].map(pad).join(":");
  }
  function novaData() {
    let newDat = new Date();
    let monName = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    return (
      newDat.getDate() +
      "/" +
      monName[newDat.getMonth()] +
      "/" +
      newDat.getFullYear()
    );
  }

  function newListMethod(res) {
    listMethod.push({
      hours: novaHora(),
      date: novaData(),
      name: "Ackley N. 2 Function",
      method: res,
    });
    console.log(listMethod)
  }

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver_results":
        newListMethod(response.data);
        setStoregeMethods(listMethod);
        break;

      default:
        break;
    }
  }, [response]);

  useEffect(() => {
    console.log("res")
  }, [setStoregeMethods])

  return (
    <ResultMethodContext.Provider value={{ listMethod, storegeMethods }}>
      {children}
    </ResultMethodContext.Provider>
  );
};
