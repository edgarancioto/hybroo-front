import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 10px;
	width: calc(100vw - 290px);
  height: calc(100vh - 80px);
	margin-left: 290px;
	border-radius: 30px;
  background-color: #fff;

	flex-direction: column;
`;

export const TitleApp = styled.h3`
  color: #f78e20;
  margin: 10px;
`;

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dfdfdf;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: ease-in-out 0.4s;
  margin: 10px;
  align-items: center;

  :hover {
    border: 1px solid #f78e20;
  }

  ul {
    padding: 5px 30px;
    list-style: none;
  }

  li {
    display: flex;
  }

  strong {
    margin-right: 20px;
    font-size: 16px;
    width: 110px;
  }
  img {
    margin-top: 10px;
    width: 550px;
  }
  
`;
export const RecentTittle = styled.div`
  width: 100%;
  padding: 10px;
  background: #f7f7f7;
  color: #678e9c;
  font-size: 16px;
`;
export const RecentContent = styled.div`
  width: 100%;
  padding: 10px;

  h3 {
    margin: 35px 0 10px 0;
  }
`;

export const ListMethod = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 5px 0;
	cursor: pointer;
	
`;

export const TitleMethod = styled.div`
	input {
		position: absolute;
		margin-top: 7px;
		margin-left: 20px;
	}
	span {
		margin-left: 55px;
	}
	span:hover {
		color: #2c7be5;
	}
`;

export const DataMethod = styled.div`
	span {
		margin: 0 15px;
	}
	svg {
		width: 20px;
		margin-top: -2px;
		margin-right: 20px;
	}
`;

export const RecentInfo = styled.div`

`;
export const RecentImgs = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
  div img {
    width: 100%;
  }
`;


