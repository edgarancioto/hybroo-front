import styled from "styled-components";

export const Input = styled.input`
  margin: 8px 0 8px 0;
  padding: 14px 14px;
  width: 100%;
  height: auto;

  color: #172b4d;
  font-size: 16px;
  border: solid 1px #d3d4d5;
  border-radius: 0.5rem;

  ::placeholder {
    color: #d3d4d5;
  }
  :hover {
    border: solid 0.1px #172b4d;
  }
  :focus {
    outline: none;
  }
`;
export const Content = styled.div`
  cursor: pointer;
  position: relative;
  margin: -49px 0px 10px 365px;

  svg {
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    margin: -54px 0px 10px 285px;
  }
`;
export const HelperText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  margin: 10px 13px 0px;
  color: red;
  display: ${(props) => (this === "" ? "none" : "inline")};
`;
