import styled from "styled-components";
import HitDiceBoxImage from "../../assets/Atributos e Combates/Inputs e Selects/Input de Dado de Vida.svg"

export const HitDiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${HitDiceBoxImage});
  background-position: center;
  width: 131px;
  height: 131px;
  margin: 0;
  
`;

export const  HitDiceElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 104px;
  height: 131px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 14px 0 14px;
`;

export const HitDiceTotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 104px;
  justify-content: flex-start;
`;

const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif;
`;

export const HitDiceTitle = styled.h1`
  font-size: 13px;
  height: 21px;
  color: #890004;
  font-weight: 800;
  margin-top: 14px;
  margin-bottom: 0;
`;

export const HitDiceText = styled(TextBase).attrs({
    color: '#890004',
})`
  
  font-size: 13px;
  margin: 0 0 0 0;
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  
`;

export const HitDiceInputTotal = styled.input`
  background-size: cover;
  background-color: transparent;
  color: #890004;
  font-weight: 700;
  background-position: center;
  width: 60px;
  height: 18px;
  border: none; 
  outline: none;
  margin: 0;
  padding:5px;
  box-sizing: border-box;
  &:last-child {
    margin-right: 0;
  }
`;

export const HitDiceInput = styled.input`
  background-size: cover;
  background-color: transparent;
  color: #890004;
  font-size: 28px;
  background-position: center;
  width: 100px;
  height: 25px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 5px 5px 5px 30px;
  &:last-child {
    margin-right: 0;
  }
`;