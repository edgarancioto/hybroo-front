import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import firebase from "../../auth/config";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import SubmitButton from "../../components/SubmitButton";

function initialState() {
  return { email: "", password: "", name: "", repeatPassword: "" };
}

function Register() {
  const [values, setValues] = useState(initialState);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (values.email !== "") {
      setErrorEmail(false);
    }
    if (values.name !== "") {
      setErrorName(false);
    }

    if (values.password !== "" && values.repeatPassword === values.password) {
      setErrorPassword(false);
    }
  }

  function HandleSubmit() {
    if (values.email === "") {
      setErrorEmail(true);
      return;
    }
    if (values.password === "") {
      setErrorPassword(true);
      return;
    }
    if (values.name === "") {
      setErrorName(true);
      return;
    }
    handlerSignUp();
  }

  const handlerSignUp = async () => {
    try {
      await firebase
        .auth()

        .createUserWithEmailAndPassword(values.email, values.password);
      history.push("/applications");
    } catch (error) {
      console.log(error);
      alert(
        "Algo deu errado. Coloque um email válido com um senha com mais de 6 digitos, e tente novamente!"
      );
    }

    let userName = firebase.auth().currentUser;
    if (!!userName) {
      userName.updateProfile({
        displayName: values.name,
      });
    }
  };

  return (
    <S.Container>
      <S.ContentForm>
        <h4>Registrar</h4>

        <S.Label>Nome</S.Label>
        <InputText
          onChange={onChange}
          name="name"
          value={values.name}
          helperText={errorName ? "Este campo é obrigatório" : ""}
        />
        <S.Label>Email</S.Label>
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
        <S.Label>Repetir a senha</S.Label>
        <InputPassword
          onChange={onChange}
          value={values.repeatPassword}
          name="repeatPassword"
          password={true}
          helperText={errorPassword ? "Este campo é obrigatório" : ""}
        />

        <S.ContainerButtons>
          <SubmitButton onClick={() => HandleSubmit()} width="100%">
            Registrar-se
          </SubmitButton>
        </S.ContainerButtons>
      </S.ContentForm>
    </S.Container>
  );
}

export default Register;
