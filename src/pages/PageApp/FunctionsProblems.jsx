/* eslint-disable no-fallthrough */
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import {
  FunctionContainer,
  FunctionTittle,
  FunctionContent,
  ButtonsCard,
  ContentButtons,
  OptionsContent,
  ButtonSwitch,
  FieldsFirstMethod,
  FieldsSecondMethod
} from "./styles";
import { WebsocketsContext } from "../../context/useWebsockets";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Switch from "react-switch";

function FunctionsProblems() {
  const [selectData, setSelectData] = useState([]);
  const [selectInfo, setSelectInfo] = useState([]);
  const [selectImage, setSelectImage] = useState([]);
  const [selectOptions, setSelectOptions] = useState();
  const [selectFirstMethod, setSelectFirstMethod] = useState([]);
  const [selectSecondMethod, setSelectSecondMethod] = useState([]);
  const [optionsMethods, setOptionsMethods] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [checkHybrid, setCheckHybrid] = useState(false);
  const [numDimension, setNumDimension] = useState(1);
  const [numberDimension, setNumberDimension] = useState({ value : 1 });

  const { sendMessage, response } = useContext(WebsocketsContext);

  const MyComponent = () => (
    <Select
      options={selectData}
      isDisabled={isDisabled}
      onChange={handleChange}
    />
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

  function getMethods() {
    sendMessage(
      JSON.stringify({
        task: "functions_methods",
        params: "None",
      })
    );
  }

  function handleChange(event) {
    getDetails(event.value);
    setSelectOptions(event);
  }
  function handleCheckHybrid() {
    setCheckHybrid(!checkHybrid);
  }

  function handleInputNumber(event) {
    const { value } = event.target;
    setNumDimension(value);
  }

  function handleFirstMethod(event) {
    const { value } = event.target;

    let newFields = [];
    optionsMethods.forEach((item) => {
      if (item[0] === value) {
        newFields = item[1].fields;
      }
    });

    setSelectFirstMethod(newFields);
  }

  function handleSecondMethod(event) {
    const { value } = event.target;

    let newFields = [];

    optionsMethods.forEach((item) => {
      if (item[1].approach === "HYBRID") {
        if (item[0] === value) {
          newFields = item[1].fields;
        }
      }
    });

    setSelectSecondMethod(newFields);
  }

  function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  }

  function confirmOptions() {
    getMethods();
    setIsDisabled(!isDisabled);

    setSelectFirstMethod([]);
    setSelectSecondMethod([]);
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
        let n = response.description.substring(0, 1)
        if(n !== "n") {
          setNumberDimension({
              value: parseInt(n)
          })
          setNumDimension(parseInt(n))
        }
        if(n === "n") {
          setNumberDimension({
              value: 1
          })
          setNumDimension(1)
        }

        setSelectInfo(vetor);
        break;

      case "functions_details_img":
        setSelectImage(response);

      case "functions_methods":
        let methods = jsonToArray(response);
        setOptionsMethods(methods);

      default:
        break;
    }
  }, [response]);
  
  console.log(numberDimension)

  return (
    <>
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
        {selectImage.img !== undefined && selectOptions !== undefined ? (
          <img
            src={selectImage.img}
            alt="
        formulation"
            s
          />
        ) : null}

        {selectOptions !== undefined ? (
          <ContentButtons>
            <ButtonsCard onClick={() => confirmOptions()}>
              {isDisabled ? (
                <>
                  <EditRoundedIcon /> <spam>To Edit</spam>
                </>
              ) : (
                <>
                  <AddBoxIcon /> <spam>Confirm</spam>
                </>
              )}
            </ButtonsCard>
          </ContentButtons>
        ) : null}
      </FunctionContainer>

      {isDisabled ? (
        <FunctionContainer>
          <FunctionTittle>Options</FunctionTittle>
          <FunctionContent>
            <OptionsContent>
              <div>
                <span>
                  Inform the number of dimensions to execute the function
                </span>
                <input
                  type="number"
                  id="dimensions"
                  name="dimensions"
                  class="form-control"
                  step={1}
                  value={numDimension}
                  disabled={numberDimension.value <= 1 ? false : true}
                  onChange={(e) => handleInputNumber(e)}
                />

                <span>First Method</span>
                <select
                  class="form-control"
                  name="first-method"
                  id="method_single"
                  onChange={(e) => handleFirstMethod(e)}
                >
                  <option disabled="" selected="" value="0">
                    - select an option -
                  </option>
                  {optionsMethods.map((item) => {
                    if (item[0] === "task") return null;
                    return <option value={item[0]}>{item[1].name}</option>;
                  })}
                </select>

                <FieldsFirstMethod>
                  {selectFirstMethod.map((item) => {
                    return (
                      <>
                        <label>{item.label}</label>
                        <input
                          type={item.type}
                          name={item.label}
                          step={item.step}
                          defaultValue={item.default}
                          min={item.min}
                          class="form-control"
                        />
                      </>
                    );
                  })}
                </FieldsFirstMethod>
              </div>

              <div>
                <ButtonSwitch>
                  <spam>SINGLE</spam>
                  <Switch
                    onChange={() => handleCheckHybrid()}
                    checked={checkHybrid}
                    height={20}
                    width={40}
                    offColor="#eee"
                    onColor="#eee"
                    onHandleColor="#208ccc"
                    offHandleColor="#208ccc"
                  />
                  <spam>HYBRID</spam>
                </ButtonSwitch>

                {checkHybrid ? (
                  <>
                    <span style={{ marginTop: "32px"}}>Second Method</span>
                    <select
                      class="form-control"
                      name="second-method"
                      id="method_second"
                      onChange={(e) => handleSecondMethod(e)}
                    >
                      <option disabled="" selected="" value="0">
                        - select an option -
                      </option>
                      {optionsMethods.map((item) => {
                        if (item[0] === "task") return null;
                        if (item[1].approach !== "HYBRID") return null;
                        return <option value={item[0]}>{item[1].name}</option>;
                      })}
                    </select>

                    <FieldsSecondMethod>
                      {selectSecondMethod.map((item) => {
                        return (
                          <>
                            <label>{item.label}</label>
                            <input
                              type={item.type}
                              name={item.label}
                              step={item.step}
                              defaultValue={item.default}
                              min={item.min}
                              class="form-control"
                            />
                          </>
                        );
                      })}
                    </FieldsSecondMethod>
                  </>
                ) : null}
              </div>
            </OptionsContent>
          </FunctionContent>
        </FunctionContainer>
      ) : null}
    </>
  );
}

export default FunctionsProblems;
