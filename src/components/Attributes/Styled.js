import styled from 'styled-components';
import AttributeBoxImage from '../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Atributo.svg'
import InputAttributeBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Atributo.svg'

export const AttributesContainer = styled.div`
  background-image: url(${AttributeBoxImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  width: 156px;
  height: 1064px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 22px 0px;
`;

export const Attribute = styled.div`
  background-image: url(${InputAttributeBoxImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  width: 115px;
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AttributeHeader = styled.h1`
  font-size: 12px;
  color: #890004;
  margin: 15px 0 0 0 ;
`;

export const AttributeModifier = styled.h1`
  font-size: 50px; 
  color: #890004;
  margin:0px;
  font-weight: bold;
  text-align: center;
`;

export const AttributeValue = styled.input`
  font-size: 20px; 
  color: #890004;
  width: 70px; 
  height: 43px;
  border: none;
  text-align: center;
  background: transparent;
  outline: none;
  appearance: none; 
  -webkit-appearance: none; 

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;
