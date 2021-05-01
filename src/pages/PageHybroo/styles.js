import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100vw - 290px);
  height: calc(100vh - 80px);
  margin-left: 290px;

  border-radius: 30px;

  background-color: #fff;
`;

export const TitleApp = styled.h3`
	color: #f78e20;
	margin: 10px;
`;

export const ContainerCard = styled.div`
	display: flex;
	flex-direction: row;

	.select {
		border-color: #f78e20;
		background-color: #f78e20;
		color: #fff;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	align-items: center;
	margin: 10px;
	padding: 5px;

	width: 206px;
	height: 60px;

	border: 1px solid #dfdfdf;

	svg {
		margin-right: 4px;
	}

	:hover {
		border: 1px solid #f78e20;
		color: #f78e20;
	}

	cursor: pointer;

`;

export const CardFunction = styled.div``;
