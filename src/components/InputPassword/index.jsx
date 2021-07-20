import React, { useState } from "react";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import * as S from "./styles";

function InputText(props) {
  const [visible, setVisible] = useState(props.password);

  const clickVisible = () => setVisible(!visible)

  return (
    <>
      <S.Input  type={visible ? 'password' : 'text' } {...props} />
      
        <S.Content onClick={clickVisible}>
          { visible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />  }
        </S.Content>
      
      <S.HelperText className="helperText">{props.helperText}</S.HelperText>
    </>
  );
}

export default InputText;
