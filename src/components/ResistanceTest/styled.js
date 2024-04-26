import styled from "styled-components";
import ResistanceBoxImage from "../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Teste de Resistencia.svg";
import ResistanceValueImage from "../../assets/Atributos e Combates/Inputs e Selects/Input de Pericia.svg"
export const ResistanceTestWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: normal;
  background-image: url(${ResistanceBoxImage}); 
  background-position: center; 
  width: 260px; 
  height: 225px;
  margin: 0;
  top: 6px;
  left: 0;
`;

export const  ResistanceWrapper = styled.div`
  width: 163px;
  height: 142px;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
  margin-top: 25px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const  ResistanceBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 18px;
`;


const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif;
`;

export const ResistanceTitle = styled.h1`
  font-size: 17px;
  height: 21px;
  color: #890004;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const ResistanceText = styled(TextBase).attrs({
    color: '#890004',
})`
  font-size: 15px;
  margin-left: 10px;
  margin-top: 0;
  font-family: 'Inter', 'sans-serif';
  font-weight: 300;
  
`;

export const ResistanceValue = styled(TextBase).attrs({
    color: '#890004',
    fontFamily: 'Inter',
})`
  font-size: 13px;
  margin-top: 0;
  height: 16px;
`;

export const ResistanceCheckBox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #890004;
  background-color: #C69999;
  cursor: pointer;
  margin-bottom: 0;

  &:checked {
    background-color: #890004;
  }

  &:focus {
    outline: none;
  }

  margin-right: 10px;
`;


export const ValueBox = styled.div`
    background-image: url${ResistanceValueImage};
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
