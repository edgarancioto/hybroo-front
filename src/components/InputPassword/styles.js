import styled from 'styled-components';


export const Input = styled.input`
  margin: 8px 0 8px 0;
  padding: 18px 14px;
  width: 100%;
  color: #172B4D;
  font-size: 16px;
  border: solid 1px #D3D4D5;
  border-radius: 5px;

  max-width: 43.1rem;
  max-height: ${props => props.height ? props.height : '5.2rem'};

  ::placeholder {
      color: #D3D4D5
  }
  :hover {
    border: solid 1px #172B4D; 
  }
  :focus {
    border: solid 2px #6554C0;
    padding: 17px 13px;
  }
`;
export const Content = styled.div`
  cursor: pointer; 
  position: relative;
  margin: -47px 0px 10px 350px;

  svg {
    font-size: 2rem;
  }
  
  @media (max-width: 400px) {
    margin: -47px 0px 10px 285px;
  }
`;
export const HelperText = styled.p`
  font-size: 1.4rem;
  text-align: left;
  margin: 3px 12px;
  color: red;
  display: ${props => this === '' ? 'none' : 'inline'}
`;
