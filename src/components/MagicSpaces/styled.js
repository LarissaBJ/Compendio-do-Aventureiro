import styled from "styled-components";
import MagicSkillsBoxImage from "../../assets/Magias e Conjuracoes/Caixas de Componentes/Caixa Magias.svg";
import MagicSpaceImage from '../../assets/Magias e Conjuracoes/Inputs e Selects/Input Nivel de Magia.svg';
import TitleButtonImage from '../../assets/Magias e Conjuracoes/Icones e Botões/Icone Seta Baixo.svg'

export const MagicSkillsBox = styled.div`
  background-image: url(${MagicSkillsBoxImage}); 
  background-position: center;
  
  width: 992px;
  height: 442px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  align-items: flex-start;
  padding-left: 11px;

`;
export const MagicSpacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 231.5px;
  height: 55px;
  margin-bottom: 14px;
`;

export const MagicSpacesHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  width: 92%;
`;
export const MagicSpacesHeaderText = styled.p`
  font-size: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0 6px 0 0;
`;

export const MagicSpacesNumberTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 7px 0 0 3px;
`;


export const TittleButton = styled.div`
  background-image: url(${TitleButtonImage});
  width: 25.12px;
  height: 16px;
`;


export const MagicSpacesNumberInput = styled.input`
  display: flex;
  width: 34px;
  flex-direction: row;
  background: unset;
  border: unset;
  color: #890004;
  justify-content: space-between;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0 0 0 0;

`;

export const MagicSpacesNumbertext = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0 24px 0 0;
`;

export const MagicSpacesTextWrapper = styled.div`
  background-image: url(${MagicSpaceImage});
  width: 229.5px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 4px;
`;

export const ItensWrapper = styled.div`
  width: 981px;
  height: 304px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 4px;
  overflow-y: auto;
  max-height: 100vh;

  &:focus {
    outline: none;
    border-color: rgba(255, 0, 0, 0.3);
  }

  &::-webkit-scrollbar {
    width: 15px;
    height: 88px\;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #890004;
    border-radius: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: #890004 transparent;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 98%;
  justify-content: space-around;
`;

export const MinorText = styled.p`
  font-size: 12px;
  font-family: 'Cardo', sans-serif;
  font-weight: 600;
  color: #FF0000;
  width: 125px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MagicTitle = styled.h2`
  font-size: 14px;
  font-family: 'Cardo', sans-serif;
  font-weight: 600;
  color: #FF0000;
  margin: 0;
`

export const MagicTitleMinorText = styled.h2`
  font-size: 10px;
  font-family: 'Cardo', sans-serif;
  font-weight: 400;
  color: #000000;
  margin: 0;
  
`

export const HorizontalRow = styled.div`
  height: 2px;
  width: 100%;
  background-color: red;
  word-wrap: break-word;
  overflow-y: auto;
`