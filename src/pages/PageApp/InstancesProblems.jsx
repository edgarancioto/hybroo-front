import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { WebsocketsContext } from "../../context/useWebsockets";

import * as S from "./styles";

function InstanceProblems() {
  const [arrayOptions, setArrayOptions] = useState([]);
  const [selectIntance, setSelectIntance] = useState([]);
  const [selectOptionsIntance, setSelectOptionsIntance] = useState([]);
  const [selectOptions, setSelectOptions] = useState();
  const [selectTypeIntance, setSelectTypeInstance] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const { sendMessage, response } = useContext(WebsocketsContext);

  const SelectIntances = () => (
    <Select
      options={selectIntance}
      isDisabled={isDisabled}
      onChange={handleChangeInstance}
    />
  );

  const SelectOptionsIntances = () => (
    <Select
      options={selectOptionsIntance}
      isDisabled={isDisabled}
      onChange={handleChangeOptions}

    />
  );

  // function getDetails(id) {
  //   sendMessage(
  //     JSON.stringify({
  //       task: "functions_details",
  //       params: { function_id: id },
  //     })
  //   );
  //   sendMessage(
  //     JSON.stringify({
  //       task: "functions_details_img",
  //       params: { function_id: id },
  //     })
  //   );
  // }

  function handleChangeInstance(event) {
    let dataOptions = []
    
    arrayOptions.forEach((item, index) => {
      if(item[0] === "task") return null

      if(item[0] === event.label) {
        item[1].forEach((data, index) => {
          dataOptions.push({ value: index, label: data });
        });
      }
    })

    setSelectOptionsIntance(dataOptions);
  }

  function handleChangeOptions(event) {
    // getDetails(event.value);
    // setSelectOptions(event);
    
    console.log(event);
  }

  function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  }

  useEffect(() => {
    const task = response.task;

    switch (task) {
      case "instances_names":
        let data = jsonToArray(response);
        let dataOptions = [];

        setArrayOptions(data);

        data.forEach((data, index) => {
          if (data[0] === "task") return null;
          dataOptions.push({ value: index, label: data[0] });
        });

        setSelectIntance(dataOptions);

        break;

      default:
        break;
    }
  }, [response]);

  return (
    <>
      <S.FunctionContainer>
        <S.FunctionTittle>Select Instances problems</S.FunctionTittle>
        <S.FunctionContent>{SelectIntances()}</S.FunctionContent>

        <S.FunctionContent>{SelectOptionsIntances()}</S.FunctionContent>
      </S.FunctionContainer>
    </>
  );
}

export default InstanceProblems;
