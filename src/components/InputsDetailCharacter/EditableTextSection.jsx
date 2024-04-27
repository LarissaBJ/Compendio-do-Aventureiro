import React, { useState } from 'react';
import { BoxBackground, HeaderBox, TitleHeader, InputContent, Icone, TextDisplay } from './styled.js';
import {IconButton } from '../StyledButtons.js';
import IconEdit from '../../assets/Atributos e Combates/Icones e Botões/Icone de Editar.svg';
import IconConfirm from '../../assets/Atributos e Combates/Icones e Botões/Icone de Confirmar.svg';

const EditableTextSection = ({
    title,
    backgroundImage,
    width,
    height,
    inputWidth,
    inputHeight,
    inputPadding,
    inputMarginBottom,
    displayWidth,
    displayPadding,
    displayMargin,
    displayMaxHeight,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('');

    const toggleEdit = () => setIsEditing(!isEditing);
    const handleChange = (event) => setText(event.target.value);

    return (
        <BoxBackground $bgImage={backgroundImage} width={width} height={height}>
            <HeaderBox>
                <TitleHeader>{title}</TitleHeader>
                <IconButton
                    width='10px' 
                    height='10px'
                    right="20px" 
                    top="17px"
                    position= "absolute"
                    onClick={toggleEdit}>
                    <Icone src={isEditing ? IconConfirm : IconEdit} alt="Editar" />
                </IconButton>
            </HeaderBox>
            {isEditing ? (
                <InputContent 
                    type="text"
                    width={inputWidth}
                    height={inputHeight}
                    padding={inputPadding}
                    marginBottom={inputMarginBottom}
                    value={text}
                    onChange={handleChange}
                    autoFocus />
            ) : (
                <TextDisplay
                    width={displayWidth}
                    padding={displayPadding}
                    margin={displayMargin}
                    maxHeight={displayMaxHeight}
                >{text || 'Digite seu texto...'}</TextDisplay>
            )}
        </BoxBackground>
    );
};

export default EditableTextSection;