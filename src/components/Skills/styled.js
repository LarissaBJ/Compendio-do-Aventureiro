import styled from 'styled-components';
import SkillsBoxImage from '../../assets/Atributos e Combates/Caixas de Componentes/Caixa de Pericias.svg';

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${SkillsBoxImage});
  background-size: cover;
  background-position: center;
  width: 255.55px;
  height: 590px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
`;
export const SkillTitle = styled.h1`
  font-size: 15px;
  color: #890004;
  margin-top: 10px;
  margin-bottom: 15px;
`;
export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom : 4px ;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #890004;
  background-color: #C69999;
  cursor: pointer;
  &:checked {
    background-color: #890004;
  }
  &:focus {
    outline: none;
  }
  margin-right: 8px;
`;

export const ModBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
`;

export const ModTitle = styled.h1`
  font-size: 11px;
  color: #890004;
  margin: 0;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #890004;
  text-align: ${props => props.textAlign || 'left'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin: ${props => props.margin || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;

export const LabelName = styled(Label)`
  flex: 2;
  text-align: left;
  overflow: hidden;
  white-space: normal;
  font-weight: 300;
`;

export const LabelAttribute = styled(Label)`
  width: 45px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
`;

export const LabelHeaderName = styled(Label)`
  width: 50px;
  margin-right: 30px;
  margin-left: 10px;
`;

export const LabelHeaderAttribute = styled(Label)`
  width: 50px;
`;

export const LabelHeaderMod = styled(Label)`
  width: 30px;
  margin-left:38px ;
  margin-right:20px ;
`;