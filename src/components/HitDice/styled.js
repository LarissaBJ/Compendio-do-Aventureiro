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

export const  DeathSavesElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 131px;
  height: 131px;
  align-items: center;
  justify-content: flex-end;

  
`;

const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif;
`;

export const DeathSavesTitle = styled.h1`
  font-size: 13px;
  height: 21px;
  color: #890004;
  font-weight: 800;
  margin-top: 14px;
  margin-bottom: 0;
`;

export const DeathSavesText = styled(TextBase).attrs({
    color: '#890004',
})`
  
  font-size: 13px;
  margin: 0 0 0 0;
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  
`;
