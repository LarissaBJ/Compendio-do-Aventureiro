import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 80px; 
  right: 0;
  background-color: #000000; 
  padding: 20px;
  color: #F88B8B;
  width: 250px;
`;


export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white; 

  & > a {
    color: white; 
    margin-bottom: 10px; 
    text-decoration: none; 
    font-family: 'SuaFonte'; 
    font-size: 18px;

    &:hover {
      color: #FFB8BA;
    }
  }

  & > button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-family: 'SuaFonte'; 
    font-size: 18px; 

    &:hover {
      color: #FFB8BA; 
    }
  }
`;