/* eslint-disable no-fallthrough */
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import {
  FunctionContainer,
  FunctionTittle,
  FunctionContent,
  ButtonsCard,
  ContentButtons,
} from "./styles";
import { WebsocketsContext } from "../../context/useWebsockets";
import AddBoxIcon from "@material-ui/icons/AddBox";

function FunctionsProblems() {
  const [selectData, setSelectData] = useState([]);
  const [selectInfo, setSelectInfo] = useState([]);
  const [selectImage, setSelectImage] = useState([]);
  const [selectOptions, setSelectOptions] = useState();

  const { sendMessage, response } = useContext(WebsocketsContext);

  const MyComponent = () => (
    <Select options={selectData} onChange={handleChange} />
  );

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
    setSelectOptions(event);
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

      default:
        break;
    }
  }, [response]);

  return (
    <FunctionContainer>
      <FunctionTittle>Select Function</FunctionTittle>
      <FunctionContent>{MyComponent()}</FunctionContent>

      <ul>
        {selectInfo.map((info) => {
          if (info[0] === "id") return null;
          if (info[0] === "task") return null;
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
          s
        />
      ) : null}

      {selectOptions !== undefined ? (
        <ContentButtons>
          <ButtonsCard>
            <AddBoxIcon /> confirm
          </ButtonsCard>
        </ContentButtons>
      ) : null}
    </FunctionContainer>
  );
}

export default FunctionsProblems;
