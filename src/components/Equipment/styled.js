import styled from 'styled-components';
import EquipamentBoxImage from '../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Equipamento.svg';

export const EquipmentWrapper = styled.div`
  background-image: url(${EquipamentBoxImage}); 
  background-size: cover; 
  background-position: center; 
  width: 415.5px;
  height: 420.5px;
  color: #fff; 
  padding: 0px 15px 0px 15px; 
  box-sizing: border-box;
  position: relative; 
`;

export const EquipmentTitle = styled.h2`
  color: #890004;
  text-align: center;
  position: absolute; 
  bottom: 0;
  left: 0; 
  width: 100%;
  padding: 10px 0; 
  margin: 0px;
  font-size: 17px;
`;

// CONFIGURAÇÃO DE MOEDAS
export const CoinsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const CoinSlot = styled.div`
  background-image: ${(props) => `url(${props.$image})`};
  background-size: cover; 
  background-position: center; 
  width: 66px; 
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputCoin = styled.input`
  width: 100%; 
  height: 30%;
  padding: 3vh 1vh 0vh 1vh;
  color:#890004;
  background: transparent; 
  border: none; 
  font-size: 16px; 
  text-align: center; 

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none; 
  }
`;

// CONFIGURAÇÃO DE ITENS 

export const ItemHeader = styled.div`
  display: flex;
  flex-direction:row;
  margin-bottom: 5px;
  width: 385px; 
  color: #C00000;
  font-weight: bold;
`;

export const ItemHeaderTitle = styled.span`
  text-align: center;
  margin-left: 2px;
  width: ${(props) => props.width || '48px'};  
`;

export const ItemList = styled.ul`
  list-style: none;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  width: 100%; 
  padding:0px;
  margin: 10px 0px;
  max-height: 270px;
  overflow-y: auto; 
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; 

  -ms-overflow-style: none;
`;


export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 385px; 
`;

export const ItemInput = styled.input`
  background-image: url(${props => props.$image});
  background-size: cover;
  background-color: transparent;
  background-position: center;
  width: ${props => props.width};
  height: 44px;
  border: none; 
  outline: none;
  margin: 0px 4px 5px 0px;
  padding:5px;
  box-sizing: border-box; 
  &:last-child {
    margin-right: 0;
  }
`;

