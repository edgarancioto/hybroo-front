import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100vw - 290px);
  height: calc(100vh - 80px);
  margin-left: 290px;

  border-radius: 30px;

  background-color: #fff;

  scroll-behavior: smooth;
`;

export const TitleApp = styled.h3`
  color: #f78e20;
  margin: 10px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;

  .select {
    border-color: #f78e20;
    background-color: #f78e20;
    color: #fff;
  }

  .card:hover {
    border: 1px solid #f78e20;
    color: #f78e20;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;
  padding: 5px;

  width: 206px;
  height: 60px;

  border: 1px solid #dfdfdf;

  svg {
    margin-right: 4px;
  }

  cursor: pointer;
`;

export const FunctionSelected = styled.div`
  margin-top: 20px;
`;
export const FunctionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  border: 1px solid #dfdfdf;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  //transition: ease-in-out 0.4s;
  margin: 10px;
  margin-bottom: 20px;
  align-items: center;
  padding-bottom: 20px;

  scroll-behavior: smooth;

  :hover {
    border: 1px solid #f78e20;
  }

  ul {
    padding: 5px 30px;
    list-style: none;
  }

  li {
    display: flex;
  }

  strong {
    margin-right: 20px;
    font-size: 16px;
    width: 110px;
  }
  img {
    margin-top: 10px;
    width: 550px;
  }
`;
export const FunctionTittle = styled.div`
  width: 100%;
  padding: 10px;
  background: #f7f7f7;
  color: #678e9c;
  font-size: 16px;
`;
export const FunctionContent = styled.div`
  scroll-behavior: smooth;
  width: 100%;
  padding: 10px;
`;

export const ButtonsCard = styled.button`
  align-items: center;
  text-align: center;
  border: none;
  color: #777;
  background-color: transparent;
  padding: 10px;
  margin: 5px;
  cursor: pointer;

  font-weight: bolder;
  font-size: 16px;

  :hover {
    color: #f78e20;
  }
  :focus {
    border: none;
    outline: none;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 26px 0px -10px 40px;
  width: 100%;
`;

export const OptionsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 50%;
  }

  .react-switch-handle {
    top: 10px !important;
  }
`;

export const ButtonSwitch = styled.div`
  display: flex;
  flex-direction: row !important;
`;

export const FieldsFirstMethod = styled.div`
  width: 100% !important;
  padding: 0 !important;
  margin-top: 14px;
  text-align: inherit;

  label {
    width: 100%;
    padding: 0 5px;
  }
`;

export const FieldsSecondMethod = styled.div`
  width: 100% !important;
  padding: 0 !important;
  margin-top: 14px;
  text-align: inherit;

  label {
    width: 100%;
    padding: 0 5px;
  }
`;

export const WrapperButtons = styled.div`
  width: 100%;
  padding: 5px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
`;
export const SubimitButton = styled.button`
  border: none;
  border-color: #f78e20;
  background-color: #f78e20;
  color: #fff;

  padding: 20px 40px;
  cursor: pointer;

  transition: ease-in-out 0.3s;

  :hover {
    background-color: #f47f09;
  }
  :focus {
    border: none;
    outline: none;
  }
`;

export const StartRequest = styled.div`
  button {
    border: 1px solid;
    border-color: #f78e20;
    background-color: #fff;
    color: #f78e20;

    padding: 5px;
    cursor: pointer;

    transition: ease-in-out 0.3s;

    :hover {
      border-color: #f78e20;
      background-color: #f78e20;
      color: #fff;
    }
    :focus {
      border: none;
      outline: none;
    }
  }
`;

export const SimulationStyles = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px;
  width: 100%;

  div span {
    margin-left: 8px;
    margin-top: -2px;
  }
`;
