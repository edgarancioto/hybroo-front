import styled from "styled-components";
import teamImage from "../../assets/img/10.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  width: 100%;
  h2 {
    margin-bottom: 60px;
  }
`;

export const ContainerImage = styled.div`
  background-position: center;
  background-image: url(${teamImage});
  width: 100%;
`;

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #8492a6;

  width: 221px;
  min-height: 308px;

  margin: 0px 20px 35px 20px;
  padding: 10px;

  h5 {
    font-size: 1.4rem;
    margin: 15px 0;
  }
  span {
    padding: 0 10px;
    text-align: justify;
    line-height: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .LinkIcons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px 0;
  }

  .LinkIcons svg {
    color: #8492a6;
    font-size: 2rem;

    :hover {
      color: #f78e20;
    }
  }
  .avatar {
    display: flex;
    text-align: center;
    align-items: center;
  }

  .avatar svg,
  .avatar img {
    width: 90px;
    height: 90px;
  }

  :hover {
    border: 1px solid #218ccc;
  }
`;

export const ContentTeam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
`;
