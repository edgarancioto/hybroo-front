/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState, useContext } from "react";
import { WebsocketsContext } from "../context/useWebsockets";
//import usePersistedState from "../helpers/usePersistedState";

const initialValue = {
  resultMethod: {},
  listMethod: [],
  storegeMethods: [],
};
export const ResultMethodContext = createContext(initialValue);

export const ResultMethodProvider = ({ children }) => {
  const { response } = useContext(WebsocketsContext);

  const [listMethod, setListMethod ] = useState([]);
  //const [storegeMethods, setStoregeMethods] = usePersistedState("methods", []);
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
    let newListMethod = [];
    newListMethod.push(...listMethod)

    let img3d = res["3d"];
    let imgcontour = res.contour;
    let err1 = res.err1;
    let err2 = "";
    let err3 = "";
    let problem = res.problem;
    let descriptionProblem = res["problem-description"];
    let isHybrid = res.isHybrid;

    //result first
    let decimalBestFirst1 = res["result-first"]["decimal-best"][1];
    let decimalBestFirst2 = res["result-first"]["decimal-best"][2];
    let timeFirst = res["result-first"].time;
    let valueBestFirst = res["result-first"]["value-best"];

    //result second
    let decimalBestSecond1 = "";
    let decimalBestSecond2 = "";
    let timeSecond = "";
    let valueBestSecond = "";

    if (isHybrid) {
      err2 = res.err2;
      err3 = res.err3;

      decimalBestSecond1 = res["result-second"]["decimal-best"][1];
      decimalBestSecond2 = res["result-second"]["decimal-best"][2];
      timeSecond = res["result-second"].time;
      valueBestSecond = res["result-second"]["value-best"];
    }

    let imgArray = [
      img3d,
      imgcontour,
      err1,
      err2,
      err3
    ]

    newListMethod.push({
      hours: novaHora(),
      date: novaData(),
      name: problem,
      description: descriptionProblem,
      img3d,
      imgcontour,
      err1,
      err2,
      err3,
      decimalBestFirst1,
      decimalBestFirst2,
      decimalBestSecond1,
      decimalBestSecond2,
      timeFirst,
      timeSecond,
      valueBestFirst,
      valueBestSecond,
      isHybrid,
      imgArray
    });

    setListMethod(newListMethod);
  }

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "functions_solver_results":
        newListMethod(response.data);
        break;

      default:
        break;
    }
  }, [response]);

  return (
    <ResultMethodContext.Provider value={{ listMethod }}>
      {children}
    </ResultMethodContext.Provider>
  );
};
