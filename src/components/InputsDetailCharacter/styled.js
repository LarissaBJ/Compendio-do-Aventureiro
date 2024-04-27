import styled from 'styled-components';


export const BoxBackground = styled.div`
     background-image: url(${props => props.$bgImage});
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
  
`;

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    padding: 10px;
    justify-content: center;
    position:relative;
`;

export const TitleHeader = styled.h1`
    margin: 0;
    font-size:17px;
    color: #890004;

`;

export const InputContent = styled.textarea`
    width: ${(props) => props.width || '95%'}; 
    height: ${(props) => props.height || '75%'}; 
    background-color: transparent;
    border: 1px solid transparent;
    color: #890004;
    border-radius: 4px; 
    padding: ${props => props.padding || '0 20px'};
    margin-bottom: ${props => props.marginBottom || '10px'};
    line-height: 1.5; 
    overflow-y: auto; 
    &:focus {
        outline: none;
        border-color: rgba(255, 0, 0, 0.3);
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        background: #890004; 
        border-radius: 5px;
    }

    scrollbar-width: thin; 
    scrollbar-color: #890004 transparent; 
`;

export const Icone = styled.img`
    cursor: pointer;
`;

export const TextDisplay = styled.div`
    width: ${(props) => props.width || '95%'}; 
    background-color: transparent;
    color: #890004;
    border-radius: 4px;
    padding: ${props => props.padding || '0 20px'};
    margin: ${props => props.margin || '0'};
    word-wrap: break-word; 
    overflow-y: auto; 
    max-height: ${props => props.maxHeight || '75%'};

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #890004;
        border-radius: 5px;
    }

    scrollbar-width: thin;
    scrollbar-color: #890004 transparent;
`;


