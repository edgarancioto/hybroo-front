import styled from "styled-components";

export const Button = styled.button`
  padding: 1.2rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-radius: 0.5rem;

  color: #fff;
  transition: 0.3s;
  font-size: 1.8rem;

  background-color: #f78e20;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 0.8;
  }
`;
