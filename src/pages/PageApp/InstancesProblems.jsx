import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { WebsocketsContext } from "../../context/useWebsockets";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import * as S from "./styles";

function InstanceProblems() {
  const [arrayOptions, setArrayOptions] = useState([]);
  const [selectIntance, setSelectIntance] = useState([]);
  const [selectOptionsIntance, setSelectOptionsIntance] = useState([]);
  const [selectOptions, setSelectOptions] = useState();
  const [selectProblem, setSelectProblem] = useState();
  const [selectFirstMethod, setSelectFirstMethod] = useState([]);
  const [selectSecondMethod, setSelectSecondMethod] = useState([]);
  const [optionsMethods, setOptionsMethods] = useState([]);
  const [checkHybrid, setCheckHybrid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isResult, setIsResult] = useState(false);
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

  function getMethods() {
    sendMessage(
      JSON.stringify({
        task: "instances_methods",
        params: "None",
      })
    );
  }

  function handleChangeInstance(event) {
    let dataOptions = [];

    arrayOptions.forEach((item, index) => {
      if (item[0] === "task") return null;

      if (item[0] === event.label) {
        item[1].forEach((data, index) => {
          dataOptions.push({ value: index, label: data });
        });
      }
    });

    setSelectOptionsIntance(dataOptions);
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

  function handleChangeOptions(event) {
    getMethods();
    setSelectOptions(true);
    setSelectProblem(event.label);
  }

  function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
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

  function handleCheckHybrid() {
    setCheckHybrid(!checkHybrid);
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
        fieldsFirtsMethod[label] =  value;
      });
    }

    if (checkHybrid) {
      if (selectSecondMethod.length > 0) {
        selectSecondMethod.forEach((item, index) => {
          var inputValue = document.getElementById("secondMethod" + index);
          let label = item.label.split(" ")[0];
          let value = inputValue.value;
          fieldsSecondMethod[label] =  value ;
        });
      }
    }

    let collectionData = {
      problem: selectProblem,
      dimension: "2",
      isHybrid: checkHybrid,
      firstMethod: {...fieldsFirtsMethod},
      secondMethod: {...fieldsSecondMethod},
    };

    sendMessage(
      JSON.stringify({
        task: "instances_solver",
        params: { collectionData },
      })
    );

    if (selectFirstMethod.length > 0) {
      setIsSubmit(true);
    }
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
      case "instances_methods":
        let methods = jsonToArray(response);
        setOptionsMethods(methods);
        break;

      case "instances_solver_results":
        setIsResult(true);
        console.log(response);
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

        {selectOptions !== undefined ? (
          <S.ContentButtons>
            <S.ButtonsCard onClick={() => confirmOptions()}>
              {isDisabled ? (
                <>
                  <EditRoundedIcon /> <spam>To Edit</spam>
                </>
              ) : (
                <>
                  <AddBoxIcon /> <spam>Confirm</spam>
                </>
              )}
            </S.ButtonsCard>
          </S.ContentButtons>
        ) : null}
      </S.FunctionContainer>

      {isDisabled ? (
        <S.FunctionContainer>
          <S.FunctionTittle>Options</S.FunctionTittle>
          <S.FunctionContent>
            <S.OptionsContent>
              <div>

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

                <S.FieldsFirstMethod>
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
                </S.FieldsFirstMethod>
              </div>

              <div>
                <S.ButtonSwitch>
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
                </S.ButtonSwitch>

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

                    <S.FieldsSecondMethod id="group-first-method">
                      {selectSecondMethod.map((item, index) => {
                        if(item.type === "checkbox") {
                          console.log("teste")
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
                                onChange={(e) => console.log(e)}
                              />
                            </>
                          );
                        }
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
                    </S.FieldsSecondMethod>
                  </>
                ) : null}
              </div>
            </S.OptionsContent>
          </S.FunctionContent>
          <S.WrapperButtons>
            {!isSubmit ? (
              <S.SubimitButton onClick={() => submitCollectionData()}>
                Submit Function
              </S.SubimitButton>
            ) : !isResult ? (
              <S.StartRequest>
                <span>Start new execution... </span>
                <strong>This may take a few minutes</strong>
              </S.StartRequest>
            ) : (
              <S.StartRequest>
                <span>Finishing the execution... </span>
                <Link to="/recent">
                  <strong> Show request</strong>
                </Link>
                <button onClick={() => newRequestProblem()}>New Request</button>
              </S.StartRequest>
            )}
          </S.WrapperButtons>
        </S.FunctionContainer>
      ) : null}
    </>
  );
}

export default InstanceProblems;
