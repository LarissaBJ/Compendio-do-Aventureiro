import styled from 'styled-components';
import FilterBoxImage from '../../assets/Personagens/filter.svg'

export const PageHeaderCharacter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 1080px;
  height: 142px;
`;
export const HeaderCharacter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  border-bottom: 4px solid #890004;
  width: 900px;
  align-items: flex-end;
`;

export const TitleList = styled.h1`
    color: #2A0606; 
    font-size: 28px;
    font-family: "Adventure";
    padding: 0;
    margin:0;
`;

export const BoxCustom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 90.51px;
  width:430px;
`;

export const BoxFilter = styled.div`
    flex-direction: column;
    display: flex;
    align-items: left;
    width: 321px;
    height: 64.66px;
    margin: 0 30px;
    padding: 0;
    font-family: "Inter";
`;

export const Label = styled.label`
  font-size: 16px;
  color: #2A0606; 
  margin: 0;
  padding: 0;
`;

export const Select = styled.select`
    background-image: url(${FilterBoxImage}); 
    background-size: cover; 
    background-position: center; 
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    width: 321px;
    height: 35px;
    margin: 0;
    padding: 0;
    color:#2A0606 ;
`;

export const Button = styled.button`
  margin:0 6px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background: rgba(209, 0, 0, 0.1); // Efeito de hover leve
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px; // Mantenha as imagens dos ícones consistentes
  margin: 0;
  padding: 0;
`;


