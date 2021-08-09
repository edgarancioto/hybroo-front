import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../auth/config";
import * as S from "./styles";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Logo from "../../assets/img/logo-hybroo.png";
import SubmitButton from "../../components/SubmitButton";

function initialState() {
  return { email: "", password: "" };
}

export default function Login() {
  const [values, setValues] = useState(initialState);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const history = useHistory();

  const loginHandle = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      history.push('/applications');
    } catch (error) {
      console.log(error);
      alert('Algo deu errado. Coloque sua senha e email e tente novamente');
    }
  }

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (values.email !== "") {
      setErrorEmail(false);
    }

    if (values.password !== "") {
      setErrorPassword(false);
    }
  }

  function HandleSubmit() {
    if (values.email === "") {
      setErrorEmail(true);
      return
    }
    if (values.password === "") {
      setErrorPassword(true);
      return
    }

    loginHandle();
  }

  return (
    <S.Container>
      <S.ContentLogo>
        <img src={Logo} alt="hybroo" />
      </S.ContentLogo>
      <S.ContentForm>
        <h4>ENTRAR</h4>

        <S.Label>Email / Usuário</S.Label>
        <InputText
          onChange={onChange}
          name="email"
          value={values.email}
          helperText={errorEmail ? "Este campo é obrigatório" : ""}
        />

        <S.Label>Senha</S.Label>
        <InputPassword
          onChange={onChange}
          value={values.password}
          name="password"
          password={true}
          helperText={errorPassword ? "Este campo é obrigatório" : ""}
        />
        <S.ContainerButtons>
          <SubmitButton onClick={() => HandleSubmit()} width="100%">
            Entrar
          </SubmitButton>
          <span>
            <Link to="/register">registrar-se</Link>
          </span>
        </S.ContainerButtons>
      </S.ContentForm>
    </S.Container>
  );
}
