import styled from "styled-components";
import TraitBoxImage from "../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Proficiencia e Habilidades.svg";

export const TraitBox = styled.div`
  background-image: url(${TraitBoxImage});
  width: 268px;
  height: 414px;
  color: #fff;
  padding: 10px 18px 18px 18px;
  box-sizing: border-box;
  position: relative;
  font-weight: 700;
`;

export const TraitElementWrapper = styled.div`
  color: #890004;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;

`;

export const TraitBoxTittle = styled.h2`
  color: #890004;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 15px;
`;

export const TraitWrapper = styled.div`
  overflow-y: auto;
  max-height: 370px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #890004;
    border-radius: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: #890004 transparent;

`;

export const Trait = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  padding-bottom: 8px;
  height: auto;
  align-items: flex-start;
`;

export const TraitTittle = styled.h3`
  color: #890004;
  margin: 0;
  font-size: 17px;
  text-align: left;
`;

export const TraitText = styled.p`
  color: #890004;
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
`;
