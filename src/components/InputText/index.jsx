import React from "react";
import * as S from "./styles";

function InputText(props) {
  return (
    <>
      <S.Input {...props} autoComplete="off" />
      <S.HelperText className="helperText">{props.helperText}</S.HelperText>
    </>
  );
}

export default InputText;
