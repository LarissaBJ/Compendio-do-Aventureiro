import styled from 'styled-components';
export const PageContenier = styled.div`
  color: #890004; 
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  flex: 1;

`;
export const ContentPage = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;

`;

export const PageContenierSheet = styled.div`
  width: 1080px; 
  margin: 0 auto; 
  display: flex;
  flex-direction: column; 
`;

export const ContentSheet = styled.div`
  flex: 1; 
  display: flex;
  width: 100%; 
`;

export const PageContentMenuSheet = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%; 
  padding: 25px 36px;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => props.$width || '0px'}; 
  height: ${(props) => props.$height || '0px'}; 
  gap: ${(props) => props.$gap || '22px'}; 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.$width || '0px'}; 
  height: ${(props) => props.$height || '0px'}; 
  gap: ${(props) => props.$gap || '22px'}; 
`;


export const Exemplo = styled.h1`
  width: ${(props) => props.$width || '0px'}; 
  height: ${(props) => props.$height || '0px'}; 
  border: 2px solid #FF0000;
  margin: 0;
`;

export const BoxOptionContenier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:1105px;
  height: 798px;
  margin-bottom: 73px;
`;
export const HomePageContent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center; 
  flex: 1;
  font-family: "Amethysta";
`;

