import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding-right: ${props => props.paddingRight || '0'};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;