import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const CharacterSheetContext = createContext();

export const useCharacterSheetContext = () => useContext(CharacterSheetContext);

const initialCharacterSheet = {
  headerDetails: {
    class: '',
    race: '',
    alignment: '',
    background: '',
    level: 1,
    name: '',
  },
  attributeAndCombat: {
    life: {
      atual: 0,
      maxima: 0,
      temporaria: 0
    },
    defense: {
      iniciativa: 0,
      ca: 10,
      deslocamento: 9
    },
    resistanceTests: [],
    savingThrows: [],
    hitPoints: 0,
    proficiencyBonus: 2,
    inspiration: null,
    skills: [
      { name: 'Acrobacia', attribute: 'DESTREZA', abrev: 'DES', isSelected: false, totalMod: 0 },
      { name: 'Arcanismo', attribute: 'INTELIGÊNCIA', abrev: 'INT', isSelected: false, totalMod: 0 },
      { name: 'Atletismo', attribute: 'FORÇA', abrev: 'FOR', isSelected: false, totalMod: 0 },
      { name: 'Atuação', attribute: 'CARISMA', abrev: 'CAR', isSelected: false, totalMod: 0 },
      { name: 'Enganação', attribute: 'CARISMA', abrev: 'CAR', isSelected: false, totalMod: 0 },
      { name: 'Furtividade', attribute: 'DESTREZA', abrev: 'DES', isSelected: false, totalMod: 0 },
      { name: 'História', attribute: 'INTELIGÊNCIA', abrev: 'INT', isSelected: false, totalMod: 0 },
      { name: 'Intimidação', attribute: 'CARISMA', abrev: 'CAR', isSelected: false, totalMod: 0 },
      { name: 'Intuição', attribute: 'SABEDORIA', abrev: 'SAB', isSelected: false, totalMod: 0 },
      { name: 'Investigação', attribute: 'INTELIGÊNCIA', abrev: 'INT', isSelected: false, totalMod: 0 },
      { name: 'Lidar com Animais', attribute: 'SABEDORIA', abrev: 'SAB', isSelected: false, totalMod: 0 },
      { name: 'Medicina', attribute: 'SABEDORIA', abrev: 'SAB', isSelected: false, totalMod: 0 },
      { name: 'Natureza', attribute: 'INTELIGÊNCIA', abrev: 'INT', isSelected: false, totalMod: 0 },
      { name: 'Percepção', attribute: 'SABEDORIA', abrev: 'SAB', isSelected: false, totalMod: 0 },
      { name: 'Persuasão', attribute: 'CARISMA', abrev: 'CAR', isSelected: false, totalMod: 0 },
      { name: 'Prestidigitação', attribute: 'DESTREZA', abrev: 'DES', isSelected: false, totalMod: 0 },
      { name: 'Religião', attribute: 'INTELIGÊNCIA', abrev: 'INT', isSelected: false, totalMod: 0 },
      { name: 'Sobrevivência', attribute: 'SABEDORIA', abrev: 'SAB', isSelected: false, totalMod: 0 } 
    ],
    attacks: [],
    equipment: [],
    features: [],
    proficiencies: [],
    attributes: [
      { name: 'FORÇA', value: 10, modifier: 0 },
      { name: 'DESTREZA', value: 10, modifier: 0 },
      { name: 'CONSTITUIÇÃO', value: 10, modifier: 0 },
      { name: 'INTELIGÊNCIA', value: 10, modifier: 0 },
      { name: 'SABEDORIA', value: 10, modifier: 0 },
      { name: 'CARISMA', value: 10, modifier: 0 }
    ],
  },
  characterDetails: {
    appearance: {
      age:'', 
      height:'', 
      weight:'', 
      hair:'', 
      eyes:'', 
      skin:'',
      image: null  
    },
    traits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    features: '',
    treasure: '',
    allies: '',
    history: '',
    additionalFeaturesAndTraits: '',
  },
  magicAndConjuration: {
    magicHeaders: [],
    spellBoxes: Array(10).fill([]),
  }
};

export const CharacterSheetProvider = ({ children }) => {
  const [characterSheet, setCharacterSheet] = useState(initialCharacterSheet);

  const createCharacterSheet = (characterData) => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newSheet = {
      ...initialCharacterSheet,
      headerDetails: {
        ...initialCharacterSheet.headerDetails,
        class: characterData.clazz,
        race: characterData.race,
        alignment: characterData.alignment,
        background: characterData.background,
        name: characterData.name,
        level: 1
      }
    };
    setCharacterSheet(prev => ({...prev, [newId]: newSheet}));
    return newId;
  };

//---------------------------------------------------------------------------------------------------------------------------

const updateInputsCharacterDetails = (key, value) => {
  setCharacterSheet(prev => ({
    ...prev,
    characterDetails: {
      ...prev.characterDetails,
      [key]: value
    }
  }));
};

const updateAppearance = (attribute, value) => {
  setCharacterSheet(prev => ({
    ...prev,
    characterDetails: {
      ...prev.characterDetails,
      appearance: {
        ...prev.characterDetails.appearance,
        [attribute]: value
      }
    }
  }));
};

const uploadCharacterImage = (imageFile) => {
const reader = new FileReader();
reader.onload = () => {
  setCharacterSheet(prev => ({
    ...prev,
    characterDetails: {
      ...prev.characterDetails,
      appearance: {
        ...prev.characterDetails.appearance,
        image: reader.result  
      }
    }
  }));
};
reader.readAsDataURL(imageFile);
};

const fetchClassDetails = async (className) => {
  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${className}`);
    const newHitDie = response.data.hit_die;
    setCharacterSheet(prev => {
      const constitutionModifier = getAttributeModifier(prev.attributeAndCombat.attributes, 'CONSTITUIÇÃO');
      const newHitPoints = newHitDie + constitutionModifier;
      console.log(`Fetched class details: Hit Die = ${newHitDie}, updating hit points to ${newHitPoints}`);
      return {
        ...prev,
        attributeAndCombat: {
          ...prev.attributeAndCombat,
          hitDie: newHitDie,
          hitPoints: newHitPoints
        }
      };
    });
  } catch (error) {
    console.error('Error fetching class details:', error);
  }
};

const updateHeaderDetails = (field, value) => {
  console.log(`Updating header details: ${field} = ${value}`);
  setCharacterSheet(prev => ({
    ...prev,
    headerDetails: {
      ...prev.headerDetails,
      [field]: value
    }
  }));
  if (field === 'class') {
    fetchClassDetails(value);
  }
};

const updateHitPoints = (newHitDie) => {
  const constitutionModifier = getAttributeModifier(characterSheet.attributeAndCombat.attributes, 'CONSTITUIÇÃO');
  const totalHitPoints = newHitDie + constitutionModifier;
  console.log(`Updating hit points: New Hit Die = ${newHitDie}, Constitution Modifier = ${constitutionModifier}, Total Hit Points = ${totalHitPoints}`);
  setCharacterSheet(prev => ({
    ...prev,
    attributeAndCombat: {
      ...prev.attributeAndCombat,
      hitPoints: totalHitPoints
    }
  }));
};


const getAttributeModifier = (attributes, attributeName) => {
  const attribute = attributes.find(attr => attr.name === attributeName);
  return attribute ? Math.floor((attribute.value - 10) / 2) : 0;
};


const updateAttributes = (index, value) => {
setCharacterSheet(prev => {
  const newAttributes = prev.attributeAndCombat.attributes.map((attribute, i) => {
    if (i === index) {
      const newValue = parseInt(value, 10) || 0;
      const newModifier = Math.floor((newValue - 10) / 2);
      console.log(`Updated ${attribute.name}: Value = ${newValue}, Modifier = ${newModifier}`);
      return { ...attribute, value: newValue, modifier: newModifier };
    }
    return attribute;
  });

  const updatedSkills = prev.attributeAndCombat.skills.map(skill => {
    const relatedAttribute = newAttributes.find(attr => attr.name === skill.attribute);
    const totalMod = skill.isSelected ? relatedAttribute.modifier + prev.attributeAndCombat.proficiencyBonus : relatedAttribute.modifier;
    return { ...skill, totalMod };
  });

  const dexterityModifier = getAttributeModifier(newAttributes, 'DESTREZA');
  const constitutionModifier = getAttributeModifier(newAttributes, 'CONSTITUIÇÃO');

  const updatedDefense = {
    ...prev.attributeAndCombat.defense,
    iniciativa: dexterityModifier,
    ca: 10 + dexterityModifier
  };

  const newHitPoints = prev.attributeAndCombat.hitDie + constitutionModifier;

  const constitutionChanged = index === newAttributes.findIndex(attr => attr.name === 'CONSTITUIÇÃO');

  if (constitutionChanged) {
    console.log(`Updating hit points due to Constitution change: New max = ${newHitPoints}`);
  }

  console.log(`Current Hit Die: ${prev.attributeAndCombat.hitDie}`);

  return {
    ...prev,
    attributeAndCombat: {
      ...prev.attributeAndCombat,
      attributes: newAttributes,
      skills: updatedSkills,
      defense: updatedDefense,
      hitPoints: newHitPoints 
    }
  };
});
};

const updateSkills = (index, isSelected) => {
  setCharacterSheet(prev => {
    const updatedSkills = prev.attributeAndCombat.skills.map((skill, i) => {
      if (i === index) {
        const attributeMod = getAttributeModifier(prev.attributeAndCombat.attributes, skill.attribute);
        const totalMod = isSelected ? attributeMod + prev.attributeAndCombat.proficiencyBonus : attributeMod;
        return { ...skill, isSelected, totalMod };
      }
      return skill;
    });

    return {
      ...prev,
      attributeAndCombat: {
        ...prev.attributeAndCombat,
        skills: updatedSkills
      }
    };
  });
};

  return (
    <CharacterSheetContext.Provider value={{
      characterSheet,
      setCharacterSheet,
      createCharacterSheet,
      updateAttributes,
      updateInputsCharacterDetails,
      updateAppearance,
      uploadCharacterImage,
      fetchClassDetails,
      updateHeaderDetails,
      updateHitPoints,
      updateAttributes,
      updateSkills
    }}>
      {children}
    </CharacterSheetContext.Provider>
  );
};

