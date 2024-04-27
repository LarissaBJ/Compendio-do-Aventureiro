import styled from "styled-components";
import DeathSavesBoxImage from "../../assets/Atributos e Combates/Inputs e Selects/Input de Salvaguarda.svg";
import DeathSavesButtonImage from "../../assets/Atributos e Combates/Inputs e Selects/Select de Salvaguarda.svg";
export const DeathSavesWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${DeathSavesBoxImage}); 
  background-position: center; 
  width: 204px; 
  height: 113px;
  margin: 0;
  top: 6px;
  left: 0;
`;

export const  DeathSavesElementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 175px;
  height: 25px;
  align-items: center;
  justify-content: flex-end;
  padding-left: 12px;
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
  margin-right: 7px;
  margin-top: 0;
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  
`;

export const  DeathSavesButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 79px;
  height: 22px;
  align-items: center;
  justify-content: space-between;
  background-image: url(${DeathSavesButtonImage});
`;

export const DeathSavesCheckBox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: unset;
  cursor: pointer;
  margin: 0;

  &:checked {
    background-color: #890004;
  }

  &:focus {
    outline: none;
  }
`;
