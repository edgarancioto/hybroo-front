import React from "react";
import * as S from "./styles";

const SubmitButton = (props) => {
  return (
    <S.Button width={props.width} height={props.height} {...props}>
      {props.children}
    </S.Button>
  );
};

export default SubmitButton;
