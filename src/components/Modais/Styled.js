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

import CharacterModalImage from '../../assets/Imagens/modalPersonagens.svg'

export const CharacterBoxModal = styled.div`
    background-image: url(${CharacterModalImage});
    background-size: contain; 
    background-repeat: no-repeat;  
    background-position: center; 
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    flex-direction: column;
   align-items: center;
    justify-content: center;
    width: 756px;  
    height: 397px;  
    padding: 30px;
`;

export const Title = styled.h2`
  color: #890004;
  margin-top:40px;
  text-align: center;
  display: flex;
  font-size: 18px;
  font-family: "Adventure";
  justify-content: center;
`;

export const InfoCharacter = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const InfoOrigens = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
`;


export const Label = styled.label`
  font-size: 16px;
  color: #890004;
  margin-bottom: 5px;
`;
import InputImage from '../../assets/Personagens/inputModal.svg'
export const Input = styled.input`
    background-image: url(${InputImage});
    background-size: cover; 
    background-position: center; 
    box-sizing: border-box;
    background-color: transparent;
    padding: 8px;
    border: none;
    color: #2A0606;
    height: 34px;

`;

export const Select = styled.select`
    background-image: url(${InputImage});
    background-size: cover; 
    height: 34px;
    background-position: center; 
    box-sizing: border-box;
    background-color: transparent;
    padding: 8px;
    border: none;
    color: #2A0606;
    appearance: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #890004;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #a10005;
  }
`;
export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  padding: 20px;       
  background-color: transparent;
  color: white;     
  border: none;
  border-radius: 50%; 
  cursor: pointer;
  font-size: 16px;
  display: flex;    
  align-items: center; 
  justify-content: center; 
  line-height: 1;   
`;
