import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import firebase from "../../auth/config";
import InputText from "../../components/InputText";
import SubmitButton from "../../components/SubmitButton";

function initialState() {
  return { email: "" };
}

function ForgetPassword() {
  const [values, setValues] = useState(initialState);
  const [errorEmail, setErrorEmail] = useState(false);
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
  }

  function HandleSubmit() {
    if (values.email === "") {
      setErrorEmail(true);
      return;
    }
    handlerReset();
  }

  const handlerReset = async () => {
    try {
      await firebase
        .auth()
        .sendPasswordResetEmail(values.email)
        
        alert(
          "Enviamos as instruções para seu email!"
        );
      
      history.push("/applications");
    } catch (error) {
      console.log(error);
      alert(
        "Algo deu errado. Coloque um email e tente novamente!"
      );
    }
  };

  return (
    <S.Container>
      <S.ContentForm>
        <h4>Esqueceu sua senha?</h4>
        <S.Label style={{ textAlign: "justify", marginBottom: "10px" }}>
          Por favor entre com seu endereço de email e nós enviaremos a
          informação de como recuperar sua conta.{" "}
        </S.Label>

        <S.Label>Email</S.Label>
        <InputText
          onChange={onChange}
          name="email"
          value={values.email}
          type="email"
          helperText={errorEmail ? "Este campo é obrigatório" : ""}
        />

        <S.ContainerButtons>
          <SubmitButton onClick={() => HandleSubmit()} width="100%">
            Enviar
          </SubmitButton>
        </S.ContainerButtons>
      </S.ContentForm>
    </S.Container>
  );
}

export default ForgetPassword;
