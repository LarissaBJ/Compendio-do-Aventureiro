import styled from 'styled-components';
import HeaderMagicBoxImage from '../../assets/Magias e Conjuracoes/Caixas de Componentes/Caixa Cabeçalho.svg'
export const HeaderMagicContent = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  align-items: center;
  width:100%;
`;

export const InfoMagicBox = styled.div`
  background-image: url(${HeaderMagicBoxImage}); 
  background-position: center; 
  width: 824px;
  height: 86.92px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderTitleBox = styled.div`
  width: 824px;
  height: 40px;
  padding-top: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectValue = styled.select`
  width: 183px;
  border: 2px solid #890004;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const Value = styled.h1`
  font-size: 50px;
  color: #890004;
  width: 183px;
  text-align: center;
`;

export const TitleValue = styled.h1`
  font-size: 13px;
  color: #890004;
  width: 120px;
  text-align: center;
`;

export const NumberPag = styled.h1`
  font-size: 15px;
  color: #890004;
  width: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const Linha = styled.hr`
  width: 100%;
  border: 3px solid #890004;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;

`;

