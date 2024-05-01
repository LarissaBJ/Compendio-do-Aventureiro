import styled from 'styled-components';
import AppearanceBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Detalhe de Personagem.svg';
import AppearanceBoxInputImage from '../../assets/Detalhes do Personagem/inputs/Input  Detalhe do Personagem.svg';

export const Container = styled.div`
    background-image: url(${AppearanceBoxImage});
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    width: 440.5px;
    height: 647px;
`;
export const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content:center;
    position: relative;
`;

export const Title = styled.h2`
  color: #890004;
  font-size: 17px;
  font-family: "Inter";
  text-align: center;
  margin-top: 45px ;
`;

export const Section = styled.div`
  margin-top: 10px;
  height: 359px;
  width: 96px;
  box-sizing: border-box;  
  margin-left: 5px;
`;
export const UploadImagemDiv = styled.div`
  height: 500px;
  width: 297px;
  box-sizing: border-box;  
  margin-right: 30px;
`;
export const Body = styled.div`
  width: 100%;
  box-sizing: border-box;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 59px;
    width: 96px;
    position: relative;
`;

export const Label = styled.h3`
    color: #890004;
    font-size: 12px;
    padding: 0;
    margin: 0;
    font-family: "Inter";
    text-align: right;
    position: absolute;
    top: -10px;
`;

export const InputRow = styled.div`
    background-image: url(${AppearanceBoxInputImage});
    background-size: cover;
    background-position: center;
    box-sizing: border-box;  
    width: 96px;
    height: 52px;
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
  margin-left: 1.5px;
  width: 20px;
  height: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
    display: flex;
    padding: 8px;
    border: none;
    background-color: transparent;
    width: 50px;
    height: 28px;
    color: #890004;
    font-size: 12px;
    font-family: "Inter";
    text-align: center;
    outline: none; 

    &:focus {
        outline: none; 
        box-shadow: none;
    }
`;
export const UploadButton = styled.button`
  background: none;
  padding: 10px 20px;
  border: none;
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  right: 30px;
  top: 20px;
`;

export const Image = styled.img`
  max-width: 100%; 
  max-height: 100%; 
  height: auto;
  width: auto; 
  object-fit: cover; 
  object-position: center; 
`;