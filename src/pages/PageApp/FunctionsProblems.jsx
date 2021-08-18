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
  FieldsSecondMethod,
  SubimitButton,
  WrapperButtons,
  StartRequest,
  SimulationStyles,
} from "./styles";
import { WebsocketsContext } from "../../context/useWebsockets";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/useAuthContext";

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
  const [checkSimulation, setCheckSimulation] = useState(false);
  const [numDimension, setNumDimension] = useState(1);
  const [numSimulation, setNumSimulation] = useState(1);
  const [numberDimension, setNumberDimension] = useState({ value: 1 });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const { sendMessage, response } = useContext(WebsocketsContext);
  const { userMail } = useContext(AuthContext);

  const SelectFunction = () => (
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
  function handleCheckSimulation() {
    setCheckSimulation(!checkSimulation);
  }

  function handleInputNumber(event) {
    const { value } = event.target;
    setNumDimension(value);
  }

  function handleInputSimulation(event) {
    const { value } = event.target;
    setNumSimulation(value);
  }

  function handleFirstMethodFields(event) {
    const { value } = event.target;

    let newFields = [];
    optionsMethods.forEach((item) => {
      if (item[0] === value) {
        newFields = item[1].fields;
      }
    });

    setSelectFirstMethod(newFields);
  }

  function submitCollectionData() {
    var optionSingle =
      document.getElementById("option_single") !== null
        ? document.getElementById("option_single").value
        : "0";
    var optionSecond =
      document.getElementById("option_second") !== null
        ? document.getElementById("option_second").value
        : "0";

    var fieldsFirtsMethod = { "name-method": optionSingle };
    var fieldsSecondMethod = { "name-method": optionSecond };

    if (selectFirstMethod.length > 0) {
      selectFirstMethod.forEach((item, index) => {
        var inputValue = document.getElementById("firstMethod" + index);
        let label = item.label.split(" ")[0];
        let value = inputValue.value;
        fieldsFirtsMethod[label] = value;
      });
    }

    if (checkHybrid) {
      if (selectSecondMethod.length > 0) {
        selectSecondMethod.forEach((item, index) => {
          var inputValue = document.getElementById("secondMethod" + index);
          let label = item.label.split(" ")[0];
          let value = inputValue.value;
          fieldsSecondMethod[label] = value;
        });
      }
    }

    let collectionData = {
      problem: selectInfo[0][1].toString(),
      dimension: numDimension.toString(),
      isHybrid: checkHybrid,
      simulation: checkSimulation ? numSimulation.toString() : "0",
      firstMethod: { ...fieldsFirtsMethod },
      secondMethod: { ...fieldsSecondMethod },
      userMail
    };

    console.log(collectionData);

    sendMessage(
      JSON.stringify({
        task: "functions_solver",
        params: { collectionData },
      })
    );


    if (selectFirstMethod.length > 0) {
      setIsSubmit(true);
    }
  }

  function handleSecondMethodFields(event) {
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
    setIsSubmit(false);
  }

  function newRequestProblem() {
    getMethods();
    setIsDisabled(!isDisabled);
    setSelectFirstMethod([]);
    setSelectSecondMethod([]);

    setIsResult(false);
    setIsSubmit(false);
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
        let n = response.description.substring(0, 1);
        if (n !== "n") {
          setNumberDimension({
            value: parseInt(n),
          });
          setNumDimension(parseInt(n));
        }
        if (n === "n") {
          setNumberDimension({
            value: 1,
          });
          setNumDimension(1);
        }

        setSelectInfo(vetor);
        break;

      case "functions_details_img":
        setSelectImage(response);
        break;

      case "functions_methods":
        let methods = jsonToArray(response);
        setOptionsMethods(methods);
        break;

      case "functions_solver_results":
        setIsResult(true);
        break;

      default:
        break;
    }
  }, [response]);

  return (
    <>
      <FunctionContainer>
        <FunctionTittle>Select Function</FunctionTittle>
        <FunctionContent>{SelectFunction()}</FunctionContent>

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
          <img src={selectImage.img} alt="formulation" />
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
                  id="option_single"
                  onChange={(e) => handleFirstMethodFields(e)}
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
                  {selectFirstMethod.map((item, index) => {
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
                          id={"firstMethod" + index}
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
                    <span style={{ marginTop: "32px" }}>Second Method</span>
                    <select
                      class="form-control"
                      name="second-method"
                      id="option_second"
                      onChange={(e) => handleSecondMethodFields(e)}
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

                    <FieldsSecondMethod id="group-first-method">
                      {selectSecondMethod.map((item, index) => {
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
                              id={"secondMethod" + index}
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

          <SimulationStyles>
            <div>
              <ButtonSwitch>
                <Switch
                  onChange={() => handleCheckSimulation()}
                  checked={checkSimulation}
                  height={20}
                  width={40}
                  offColor="#eee"
                  onColor="#eee"
                  onHandleColor="#208ccc"
                  offHandleColor="#208ccc"s
                />
                <span>Simulation</span>
              </ButtonSwitch>

              <input
                type="number"
                id="simulation"
                name="simulation"
                class="form-control"
                step={1}
                value={numSimulation}
                disabled={!checkSimulation}
                onChange={(e) => handleInputSimulation(e)}
              />
            </div>
          </SimulationStyles>

          <WrapperButtons>
            {!isSubmit ? (
              <SubimitButton onClick={() => submitCollectionData()}>
                Submit Function
              </SubimitButton>
            ) : !isResult ? (
              <StartRequest>
                <span>Start new execution... </span>
                <strong>This may take a few minutes</strong>
              </StartRequest>
            ) : (
              <StartRequest>
                <span>Finishing the execution... </span>
                <Link to="/recent">
                  <strong> Show request</strong>
                </Link>
                <button onClick={() => newRequestProblem()}>New Request</button>
              </StartRequest>
            )}
          </WrapperButtons>
        </FunctionContainer>
      ) : null}
    </>
  );
}

export default FunctionsProblems;
