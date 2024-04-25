import styled from 'styled-components';
import ProficiencyBoxImage from '../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Proficiencia e Habilidades.svg';

export const ProficiencyWrapper = styled.div`
  background-image: url(${ProficiencyBoxImage}); 
  background-size: cover; 
  background-position: center; 
  width: 265px; 
  height: 410px; 
  color: #fff; 
  padding: 18px; 
  box-sizing: border-box;
  position: relative; 
`;


export const ProficiencyTitle = styled.h2`
  color: #890004; 
  text-align: center;
  position: absolute; 
  top: 10px; 
  left: 0;
  right: 0;
  margin: 0;
  font-size: 17px; 
`;


export const ProficiencyHeader = styled.div`
    display: flex;
    flex-direction:row;
    margin-bottom: 5px;
    margin-top: 20px;
    width: 210px; 
    color: #C00000;
    font-weight: bold;
`;

export const ProficiencyHeaderTitle = styled.span`
  flex: 1;
  text-align: center;
  margin-left: 2px;
  font-size: 12px;
`;

export const ProficiencyList = styled.ul`
  list-style: none;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  width: 230px; 
  padding: 0px;
  margin: auto; 
  max-height: 315px;
  overflow-y: auto; 
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; 

  -ms-overflow-style: none;
`;


export const ProficiencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  margin: 3px 0px;
`;


export const ProficiencySelect = styled.select`
  background-image: url(${props => props.$image});
  background-color: transparent;
  border: none;
  outline: none;
  width: 104.52px; 
  height: 25.16px; 
  margin-right: 3px; 
  -webkit-appearance: none; 
  appearance: none;

  &:last-child {
    margin-right: 0;
  }
`;
