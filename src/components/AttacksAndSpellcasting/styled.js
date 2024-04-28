import styled from "styled-components";
import AttSpellBoxImage from "../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Ataque.svg";
// import InputSelectImage from "../../assets/Atributos e Combates/Inputs e Selects/Select de Prociencia.svg";
import InputSelectImage from "../../assets/Atributos e Combates/Inputs e Selects/Input 2.svg"

export const AttSpellBox = styled.div`
  background-image: url(${AttSpellBoxImage});
  width: 544px; 
  height: 595px; 
  color: #fff;
  padding: 10px 18px 18px 18px;
  box-sizing: border-box;
  position: relative; 
  font-weight: 700;
`;


export const AttSpellTittle = styled.h2`
  color: #890004;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 17px;
`;

export const AttSpellElementWrapper = styled.div`
  color: #890004;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 17px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AttSpellHeaderText = styled.h2`
  color: #890004;
  text-align: center;
  margin: 0;
  font-size: 17px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
`;

export const AttSpellHeaderWrapper = styled.div`
  color: #890004;
  text-align: center;
  width: 100%;
  font-size: 17px;
  display: flex;
  flex-direction: row;
`;

export const AttSpellList = styled.div`
  list-style: none;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  width: 100%; 
  padding:0;
  margin: 10px 0;
  max-height: 270px;
  overflow-y: auto; 
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; 

  -ms-overflow-style: none;
`;

export const AttSpell = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 14px;
  padding-bottom: 8px;
  height: 46px;
`;


export const AttSpellSelect = styled.input`
  background-image: url(${InputSelectImage});
  background-color: transparent;
  text-align: center;
  border: none;
  outline: none;
  width: 184px;
  height: 44px;
  -webkit-appearance: none;
  appearance: none;
  margin-right: 9px;
  &:last-child {
    margin-right: 0;
  }
`;

export const AttSpellText = styled.h2`
  background-image: url(${props => props.$image});
  color: #ffffff;
  text-align: center;
  margin: 0 8px 0 0;
  font-size: 17px;
  font-weight: 400;
`;

