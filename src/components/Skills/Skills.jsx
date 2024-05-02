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

  const handleCheckboxChange = (index) => () => {
    const isSelected = !characterSheet.attributeAndCombat.skills[index].isSelected;
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
            onChange={handleCheckboxChange(index)} // Alterado para evitar função anônima
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
