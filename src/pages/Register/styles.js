import styled from "styled-components";
import Bg from "../../assets/img/10.png";

export const Container = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 100vw;
  height: 100vh;
  background-color: gray;

  h4 {
    font-size: 35px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const ContentForm = styled.div`
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  width: 468px;
  height: 495px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 15px;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const Label = styled.span`
  margin-top: 10px;
  font-size: 18px;
`;
