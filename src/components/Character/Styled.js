import styled from 'styled-components';
import CharacterBoxImage from '../../assets/Personagens/Quadro de Personagem.svg'

export const CharacterBox = styled.div`
    background-image: url(${CharacterBoxImage}); 
    background-size: cover; 
    background-position: center; 
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 938px;
    height: 114px;
    margin-top: 30px;
`;

export const IconePersonagem = styled.img`
    background-size: cover; 
    background-position: center; 
    box-sizing: border-box;
    width: 73px;
    height: 78px;
    margin-left: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding: 0 20px;
`;

export const NameCharacter = styled.h2`
  font-size: 20px;
  color: #2A0606;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Origens = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #890004;
  font-weight: bold;
  margin-right: 5px;
`;

export const ValueText = styled.span`
  font-size: 14px;
  color: #2A0606;
`;

export const IconeMorte = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 30px;
`;
