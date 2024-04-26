import styled from "styled-components";
import InspirationBox from "../../assets/Atributos e Combates/Inputs e Selects/CheckBox Inspiração.svg";
import CheckBoxImage from "../../assets/Atributos e Combates/Inputs e Selects/CheckBox Select.svg"

export const InspirationWrapper = styled.div`
  display: flex;
  justify-content: normal;
  background-image: url(${InspirationBox});
  background-position: center;
  align-items: center;
  width: 260px;
  height: 87px;
`;

export const  InspirationElementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 61px;
  align-items: center;
  justify-content: flex-start;
`;

export const InspirationCheckBox = styled.input.attrs({ type: 'checkbox' })`


  appearance: none;
  width: 69px;
  height: 68px;
  background-color: unset;
  cursor: pointer;
  
  margin: 3px 5px 3px 7px;

  &:checked {
    background-image: url(${CheckBoxImage});
  }

  &:focus {
    outline: none;
  }
`;

const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif;
`;

export const InspirationText = styled(TextBase).attrs({
    color: '#890004',
})`
  font-size: 13px;
  font-weight: 700;
  margin-top: 0;
  padding-left: 47.5px;
  padding-right: 48.5px;
`;