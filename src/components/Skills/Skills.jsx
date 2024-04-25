import React from 'react';
import InputPericiaImagem from '../../assets/Atributos e Combates/Inputs e Selects/Input de Pericias.svg';
import {SkillsWrapper,
  SkillsHeader ,
  SkillItem,
  CheckBox,
  ModTitle,
  ModBox,
  LabelName,
  LabelAttribute ,
  LabelHeaderAttribute,
  LabelHeaderName,
  LabelHeaderMod,
  SkillTitle
} from './styled';

const Skills = () => {

    const skills = [
      { name: 'Acrobacia', attribute: 'DES' },
      { name: 'Arcanismo', attribute: 'INT' },
      { name: 'Atletismo', attribute: 'FOR' },
      { name: 'Atuação', attribute: 'CAR' },
      { name: 'Enganação', attribute: 'CAR' },
      { name: 'Furtividade', attribute: 'DES' },
      { name: 'História', attribute: 'INT' },
      { name: 'Intimidação', attribute: 'CAR' },
      { name: 'Intuição', attribute: 'SAB' },
      { name: 'Investigação', attribute: 'INT' },
      { name: 'Lidar com Animais', attribute: 'SAB' },
      { name: 'Medicina', attribute: 'SAB' },
      { name: 'Natureza', attribute: 'INT' },
      { name: 'Percepção', attribute: 'SAB' },
      { name: 'Persuasão', attribute: 'CAR' },
      { name: 'Prestidigitação', attribute: 'DES' },
      { name: 'Religião', attribute: 'INT' },
      { name: 'Sobrevivência', attribute: 'SAB' }
    ];

  return (
    <SkillsWrapper>
      <SkillTitle>PERÍCIAS</SkillTitle>
      <SkillsHeader>
        <LabelHeaderMod>Mod</LabelHeaderMod>
        <LabelHeaderName>Nome</LabelHeaderName>
        <LabelHeaderAttribute>Atributo</LabelHeaderAttribute>
      </SkillsHeader>

      {skills.map(skill => (

        <SkillItem key={skill.name}>
          <CheckBox />
          <ModBox>
            <ModTitle>0</ModTitle>
            <img src={InputPericiaImagem} alt="input de pericias" style={{ alignSelf: 'center' }} />
          </ModBox>
          <LabelName>{skill.name}</LabelName>
          <LabelAttribute>{skill.attribute}</LabelAttribute>
        </SkillItem>

      ))}
    </SkillsWrapper>
  );
};

export default Skills;
