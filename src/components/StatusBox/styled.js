import styled from 'styled-components';
import StatusBoxImage from '../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Status.svg'
import StatusBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Status.svg'

export const StatusWrapper= styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  align-items: center;
  background-image: url(${StatusBoxImage}); 
  background-position: center; 
  width: 398px; 
  height: 191px;
  margin: 0px;
`;
export const  StatusBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const StatusBox = styled.div`
  background-image: url(${StatusBoxValueImage}); 
  background-size: cover; 
  background-position: center; 
  width: 112px; 
  height: 106px;
  margin: 0 15px; 
`;

export const StatusShieldBox = styled.div`
  background-image: ${(props) => `url(${props.$image})`};
  background-size: cover; 
  background-position: center; 
  width: ${(props) => props.width || '112px'}; 
  height: ${(props) => props.height || '133px'};
`;


// CONFIGURAAÇÃO DO TITULO 

const TextBase = styled.h2`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.$color || '#890004'}; 
  text-align: center;
  margin-top: ${(props) => props.$marginTop || '10px'}; 
  margin-bottom: ${(props) => props.$marginBottom || '0px'}; 
  font-family: 'Inter', sans-serif; //definir no doc total 
`;

export const StatusSubTitle = styled(TextBase).attrs({
  as: 'h3',
  fontSize: '12px'
})``;

export const StatusValue = styled(TextBase).attrs({
  fontSize: '25px', 
  $marginTop: '10px'
})``;

export const StatusShieldTitle = styled(TextBase).attrs({
  $marginTop: '20px', 
  fontSize: '15px'
})``;

export const StatusTitle = styled(TextBase).attrs({
  fontSize: '14px',
  $marginTop: '15px', 
  $color: '#FFFFFF' 
})``;




