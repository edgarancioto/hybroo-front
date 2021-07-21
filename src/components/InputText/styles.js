import styled from "styled-components";

export const Input = styled.input`
  margin: 0.8rem 0 0.8rem 0;
  padding: 18px 14px;
  width: 100%;

  color: #172b4d;
  font-size: 1.4rem;
  border: solid 1px #d3d4d5;
  border-radius: 0.5rem;

  ::placeholder {
    color: #6a737d;
  }
  :hover {
    border: solid 0.1rem #172b4d;
  }
  :focus {
    outline: none;
  }
`;

export const HelperText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  margin: -5px 12px 0px;
  color: red;
  display: ${(props) => (this === "" ? "none" : "inline")};
`;
