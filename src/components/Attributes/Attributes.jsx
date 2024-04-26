import React from 'react';
import { AttributesContainer, Attribute,  AttributeModifier,AttributeHeader,AttributeValue } from './Styled';

const Attributes = () => {

  const attributes = [
    { name: 'FORÇA', modifier: 0, value: 10 },
    { name: 'DESTREZA', modifier: 0 , value: 10},
    { name: 'CONSTITUIÇÃO',modifier: 0, value: 10},
    { name: 'INTELIGÊNCIA',modifier: 0, value: 10},
    { name: 'SABEDORIA',modifier: 0, value: 10 },
    { name: 'CARISMA',modifier: 0, value: 10},
  ];

  return (
    <AttributesContainer>
      {attributes.map((attribute) => (
        <Attribute key={attribute.name}>
          <AttributeHeader>{attribute.name}</AttributeHeader>
          <AttributeModifier>{attribute.modifier}</AttributeModifier>
          <AttributeValue
            type="number"
          />
        </Attribute>
      ))}
    </AttributesContainer>
  );
};

export default Attributes;
