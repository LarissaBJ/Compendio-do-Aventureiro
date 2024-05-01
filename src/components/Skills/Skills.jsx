import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext.jsx';
import {
  SkillsWrapper,
  SkillsHeader,
  SkillItem,
  CheckBox,
  ModTitle,
  ModBox,
  LabelName,
  LabelAttribute,
  LabelHeaderAttribute,
  LabelHeaderName,
  LabelHeaderMod,
  SkillTitle
} from './styled';
import InputPericiaImagem from '../../assets/Atributos e Combates/Inputs e Selects/Input de Pericias.svg';

const Skills = () => {
  const { characterSheet, updateSkills } = useContext(CharacterSheetContext);

  // Função para lidar com as mudanças no checkbox das perícias
  const handleCheckboxChange = (index) => {
    // A obtenção do estado atual da seleção e a inversão dele
    const isSelected = !characterSheet.attributeAndCombat.skills[index].isSelected;
    // Chamada para a função updateSkills do contexto com o novo estado da seleção
    updateSkills(index, isSelected);
  };
  
  return (
    <SkillsWrapper>
      <SkillTitle>PERÍCIAS</SkillTitle>
      <SkillsHeader>
        <LabelHeaderMod>Mod</LabelHeaderMod>
        <LabelHeaderName>Nome</LabelHeaderName>
        <LabelHeaderAttribute>Atributo</LabelHeaderAttribute>
      </SkillsHeader>
      {characterSheet.attributeAndCombat.skills.map((skill, index) => (
        <SkillItem key={skill.name}>
          <CheckBox
            type="checkbox"
            checked={skill.isSelected}
            onChange={() => handleCheckboxChange(index)}
          />
          <ModBox>
            <ModTitle>{skill.totalMod}</ModTitle>
            <img src={InputPericiaImagem} alt="input de perícias" style={{ alignSelf: 'center' }} />
          </ModBox>
          <LabelName>{skill.name}</LabelName>
          <LabelAttribute>{skill.abrev}</LabelAttribute>
        </SkillItem>
      ))}
    </SkillsWrapper>
  );
};

export default Skills;
