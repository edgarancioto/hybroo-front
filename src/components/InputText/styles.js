import styled from "styled-components";

export const Input = styled.input`
  margin: 0.8rem 0 0.8rem 0;
  padding: 1.8rem 1.4rem;
  width: 100%;
  max-height: ${(props) => (props.height ? props.height : "5.2rem")};
  color: #172b4d;
  font-size: 1.4rem;
  border: ${(props) =>
    props.error ? "solid 0.2rem red" : `solid 0.1rem gray`};
  border-radius: 0.5rem;

  ::placeholder {
    color: #6a737d;
  }
  :hover {
    border: solid 0.1rem #172b4d;
  }
  :focus {
    border: solid 0.2rem #f78e20;
    padding: 1.7rem 1.3rem;
  }
`;

export const HelperText = styled.p`
  font-size: 1.4rem;
  text-align: left;
  margin: 3px 12px;
  color: red;
  display: ${(props) => (this === "" ? "none" : "inline")};
`;
