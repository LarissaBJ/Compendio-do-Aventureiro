import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext.jsx';
import { AttributesContainer, Attribute, AttributeModifier, AttributeHeader, AttributeValue } from './Styled';

const Attributes = () => {
  const { characterSheet, updateAttributes } = useContext(CharacterSheetContext);

  const calculateModifier = (value) => Math.floor((value - 10) / 2);

  
  const handleAttributeValueChange = (index, newValue) => {
    const value = newValue === '' ? '' : parseInt(newValue, 10);
    const modifier = Math.floor((value - 10) / 2);
    updateAttributes(index, value, modifier);   console.log(`Updated Attribute at index ${index}: Value=${value}, Modifier=${modifier}`);
  };

  return (
    <AttributesContainer>
      {characterSheet.attributeAndCombat.attributes.map((attribute, index) => (
        <Attribute key={attribute.name}>
          <AttributeHeader>{attribute.name}</AttributeHeader>
          <AttributeModifier>{calculateModifier(attribute.value)}</AttributeModifier>
          <AttributeValue
            type="number"
            value={attribute.value}
            onChange={(e) => handleAttributeValueChange(index, e.target.value)}
          />
        </Attribute>
      ))}
    </AttributesContainer>
  );
};
export default Attributes;
