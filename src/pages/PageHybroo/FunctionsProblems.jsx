import React, { useEffect, useState } from "react";

import Select from "react-select";

import { FunctionContainer, FunctionTittle, FunctionContent } from "./styles";

function FunctionsProblems(props) {
  const { sendMessage, response } = props;
  const [selectData, setSelectData] = useState([]);
  const [selectInfo, setSelectInfo] = useState([]);
  const [selectImage, setSelectImage] = useState([]);

  function getDetails(id) {
    sendMessage(
      JSON.stringify({
        task: "functions_details",
        params: { function_id: id },
      })
    );
    sendMessage(
      JSON.stringify({
        task: "functions_details_img",
        params: { function_id: id },
      })
    );
  }

  function handleChange(event) {
    getDetails(event.value);
  }

  function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  }

  useEffect(() => {
    const data = response.data;
    const task = response.task;

    switch (task) {
      case "functions_names":
        const dataOptions = data.map((data) => {
          return { value: data.id, label: data.name };
        });
        setSelectData(dataOptions);
        break;

      case "functions_details":
        let vetor = jsonToArray(response);
        setSelectInfo(vetor);
        break;

      case "functions_details_img":
        setSelectImage(response);
        console.log(response);
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  }, [response]);

  const MyComponent = () => (
    <Select options={selectData} onChange={handleChange} />
  );
  return (
    <FunctionContainer>
      <FunctionTittle>Select Function</FunctionTittle>
      <FunctionContent>{MyComponent()}</FunctionContent>

      <ul>
        {selectInfo.map((info) => {
          if (info[0] === "id") return;
          if (info[0] === "task") return;
          return (
            <li>
              <strong>{info[0]}</strong>
              <span>{info[1]}</span>
            </li>
          );
        })}
      </ul>
      {selectImage.img !== undefined ? (
        <img
          src={selectImage.img}
          alt="
        formulation"
        />
      ) : null}
    </FunctionContainer>
  );
}

export default FunctionsProblems;
