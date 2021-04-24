import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 290px;
  background-color: #f7faf2;
`;

export const Header = styled.div`
  padding: 30px;
`;

export const Wrapper = styled.div`
  padding: 15px 30px;
  color: #2A2A2A;

  width: 100%;

  ul {
    list-style: none !important;
    padding-left: 25px;
  }

  ul li {
    margin-left: -55px;
    text-align: left;
    padding: 10px;
    margin-top: 15px; 
    transition: ease-in-out 0.2s;
  }

  ul a {
    color: #2A2A2A;
    font-size: 16px;
    transition: ease-in-out 0.4s;
  }

  ul li:hover {
    color: #f78e20;
    border-left: 5px solid #f78e20;
    
    align-items: center;
    padding: 10px;
    margin-left: -55px;
  }
  ul li:hover > svg {
    color: #f78e20;
  }
  ul li svg {
    margin-right: 15px;
    margin-left: 10px;
    width: 18px;
  }

  .active {
    color: #f78e20;
    border-left: 5px solid #f78e20;
    
    align-items: center;
    padding: 10px;
    margin-left: -55px;
  }

  .active svg {
    color: #f78e20;
  }

`;
