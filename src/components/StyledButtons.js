import styled from 'styled-components';

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
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || '0'};
  top: ${(props) => props.top || '0'};

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

/* export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
 
  display: flex;
  justify-content: ${(props) => props.$justifyContent || 'center'}; 
  align-items: center;
  width: ${(props) => props.width || '26px'};  
  height: ${(props) => props.height || '26px'};
  padding: 0;

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


export const IconButton2 = styled.button`
  border: none;
  position: absolute;
  right: ${props => props.right || '10px'};
  top: ${props => props.top || '10px'};
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: ${(props) => props.$justifyContent || 'center'}; 
  align-items: center;
  width: ${(props) => props.width || '26px'};  
  height: ${(props) => props.height || '26px'};
  padding: 0;

  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.6; 
  }
  
  &:focus {
    outline: none; 
  }
`; */

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