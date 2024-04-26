import ProficiencyBonusImage from "../../assets/Atributos e Combates/Inputs e Selects/Input de Proficiencia.svg"
import styled from "styled-components";


export const ProficiencyWrapper = styled.div`
  display: flex;
  justify-content: normal;
  background-image: url(${ProficiencyBonusImage});
  background-position: center;
  align-items: center;
  width: 253px;
  height: 61px;
`;

export const  ProficiencyElementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 253px;
  height: 61px;
  align-items: center;
  justify-content: space-around;
`;

const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif;
`;

export const ProficiencyValue = styled(TextBase).attrs({})`
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  padding-right: 5px;
`;

export const ProficiencyText = styled(TextBase).attrs({
    color: '#890004',
})`
  font-weight: 700;
  font-size: 13px;
  margin-top: 0;
  font-family: 'Inter', 'sans-serif';

`;