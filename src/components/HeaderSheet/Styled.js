import styled from 'styled-components';
import levelBoxBackground from '../../assets/Cabeçalho da Ficha/Cabeça do Dragão.svg'; 
import NameBoxBackground from '../../assets/Cabeçalho da Ficha/Espada do Dragão.svg';
import seta from '../../assets/Cabeçalho da Ficha/seta-select.svg'
import originsBoxBackground from '../../assets/Cabeçalho da Ficha/Select de Origem.svg'
import Background from '../../assets/Cabeçalho da Ficha/Fundo do Cabeçalho.svg'; 


export const HeaderSheetContent = styled.div`
    position: relative; 
    flex-direction: column;
    background-color: white;
    margin: 0rem;
    height: 434px;
    width: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    box-sizing: border-box;
    background-image: url(${Background}); 
    background-size: 1080px 372px;
    background-repeat: no-repeat;
    background-position: center; 
    z-index: 0;
`;


//NIVEL E XP PERSONAGEM CONFIGURAÇÃO DE ESTILOS : 
export const HeaderSheetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 50%;
  margin-top: 45px;
  justify-content: center;
  align-items: center;
  font-family: 'Adventure' ;

`;

export const NameBox = styled.div`
    background-image: url(${NameBoxBackground});
    background-size: cover;
    text-align: center;
    margin-left:1em;
    width: 400.82px;
    height: 144.03px;
    position: absolute;
    left:20%;
    top: 36%;
    z-index: 1;
`;
export const NameTitle = styled.h1`
    font-size: 1.5rem;
    color: #890004; 
    margin-left: 110px;

`;
export const IMG = styled.img`
    width: 458px;
    height: 209px;
    margin-top: 100px;
    margin-left: 295px;

`;

// CONFIGURAÇÃODO LEVEL :

export const LevelTitle = styled.h1`
    font-size:25px;
    color: #890004; 
    width: 80px;
    height: 27px; 
    margin-right: 70px;
    margin: 0;
`;
export const Level = styled.h2`
    font-size: 60px;
    color: #890004; 
    width: 80px;
    height: 65px; 
    margin-right: 70px;
    margin: 0;
`;

export const HeaderLevel = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 80px;
    height: 98px; 
    margin-right: 90px;
    margin-top: 110px;
`;

export const LevelBox = styled.div`
    background-image: url(${levelBoxBackground});
    background-size: cover;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 270.36px;
    height: 258.19px; 
    position: relative;
    z-index: 2;
    margin-left:3rem;
`;


// CONFIGURAÇÃO DAS ORIGINS DO PERSONAGEM ESTILOS :

export const CharacterOrigins = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 0em;
`;

export const CharacterOriginsBox = styled.div`
    background-image: url(${originsBoxBackground});
    background-size: cover;
    background-position: center; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 221px;
    height:77px; 
    margin: 0px 18px;
    margin-top: 60px;
`;

export const SelectTitle = styled.h1`
    font-size: 1em;
    color: #890004; 
    margin: 0em;
  
`;

export const CharacterOriginsSelect = styled.select`
    margin-top: 1em;
    width: 181px; 
    height: 2.4vh;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #890004;
    color: #890004;
    padding: 0.5em; 
    cursor: pointer;

    background-image: url(${seta});
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 10px 8px;

    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none;

    &:focus {
        outline: none;
    }
  
    &::-ms-expand {
        display: none; 
    }
`;

