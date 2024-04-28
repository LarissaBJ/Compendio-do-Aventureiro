import styled from "styled-components";
import AbilityBoxImage from "../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Proficiencia e Habilidades.svg";

export const AbilityBox = styled.div`
  background-image: url(${AbilityBoxImage});
  width: 268px;
  height: 414px;
  color: #fff;
  padding: 10px 18px 18px 18px;
  box-sizing: border-box;
  position: relative;
  font-weight: 700;
`;

export const AbilityElementWrapper = styled.div`
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

export const AbilityBoxTittle = styled.h2`
  color: #890004;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 15px;
`;

export const Ability = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  padding-bottom: 8px;
  height: auto;
  align-items: flex-start;
`;

export const AbilityTittle = styled.h3`
  color: #890004;
  margin: 0;
  font-size: 17px;
`;

export const AbilityText = styled.p`
  color: #890004;
  margin: 0;
  font-size: 12px;
  font-weight: 300;
`;
