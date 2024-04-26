import styled from 'styled-components';

export const PageContentMenuSheet = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%; 
  padding: 25px 45px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  gap: ${(props) => props.gap || '0px'}; 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  gap: ${(props) => props.gap || '0px'}; 
`;


export const Exemplo = styled.h1`
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  border: 2px solid #FF0000;
`;
