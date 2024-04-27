import styled from 'styled-components';
import seta from '../assets/Cabeçalho da Ficha/seta-select.svg'

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  display: flex;
  justify-content: ${(props) => props.$justifyContent || 'center'}; 
  align-items: center;
  width: ${(props) => props.width || '26px'};  
  height: ${(props) => props.height || '26px'};
  padding: 0;
  position: ${(props) => props.$position || 'relative'};
  right: ${(props) => props.$right || '0'};
  top: ${(props) => props.$top || '0'};
  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.6; 
  }
  
  &:focus {
    outline: none; 
  }
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%; 
  padding: 0px; 
`;

export const GlobalSelect = styled.select`
    margin: ${(props) => props.$margin || '1em 0 0 0'};
    width: ${(props) => props.$width || '181px'}; 
    height: ${(props) => props.$height || '2.4vh'};
    background-color: transparent;
    border: none;
    border-bottom: ${(props) => props.$borderBottom || '1px solid #890004'};
    color: #890004;
    padding: ${(props) => props.$padding || '0.5em'}; 
    cursor: pointer;

    background-image: url(${seta});
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 10px 8px;

    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none;

    &:focus {
        outline: none;
    }
  
    &::-ms-expand {
        display: none; 
    }
`;