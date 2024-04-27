import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  gap: ${(props) => props.$gap || '22px'}; 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  gap: ${(props) => props.$gap || '22px'}; 
`;


export const Exemplo = styled.h1`
  width: ${(props) => props.width || '0px'}; 
  height: ${(props) => props.height || '0px'}; 
  border: 2px solid #FF0000;
`;
