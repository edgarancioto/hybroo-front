import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 308px;

  margin: 0px 20px 35px 20px;

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
