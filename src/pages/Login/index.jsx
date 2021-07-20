import React, { useState } from "react";
import * as S from "./styles";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";

function initialState() {
  return { email: "", password: "" };
}

export default function Login() {
	const [values, setValues] = useState(initialState);
  //const { signed, signIn } = useContext(AuthContext);

	function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <S.Container>
      <S.ContentForm>
        <h4>ENTRAR</h4>

        <S.Label>Email / Usuário</S.Label>
        <InputText
          onChange={onChange}
          name="email"
					value={values.email}
          helperText={
            !values.email ? "Este campo é obrigatório" : ""
          }
        />

        <S.Label>Senha</S.Label>
        <InputPassword
          onChange={onChange}
					value={values.password}
          name="password"
          password={true}
          helperText={
            !values.password ? "Este campo é obrigatório" : ""
          }
        />
      </S.ContentForm>
    </S.Container>
  );
}
