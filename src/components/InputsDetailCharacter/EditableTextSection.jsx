import React, { useState } from 'react';
import { BoxBackground, HeaderBox, TitleHeader, InputContent, Icone, TextDisplay } from './styled';
import { IconButton } from '../GlobalStyled'; 
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
    text,
    onChange
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [localText, setLocalText] = useState(text);

    const toggleEdit = () => {
        if (isEditing) {
            onChange(localText); 
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (event) => setLocalText(event.target.value);

    return (
        <BoxBackground $bgImage={backgroundImage} width={width} height={height}>
            <HeaderBox>
                <TitleHeader>{title}</TitleHeader>
                <IconButton
                    style={{
                        width: '10px',
                        height: '10px',
                        right: "20px",
                        top: "17px",
                        position: "absolute"
                    }}
                    onClick={toggleEdit}>
                    <Icone src={isEditing ? IconConfirm : IconEdit} alt="Editar" />
                </IconButton>
            </HeaderBox>
            {isEditing ? (
                <InputContent 
                    type="text"
                    $width={inputWidth}
                    $height={inputHeight}
                    $padding={inputPadding}
                    $marginBottom={inputMarginBottom}
                    value={localText}
                    onChange={handleChange}
                    autoFocus
                />
            ) : (
                <TextDisplay
                    $width={displayWidth}
                    $padding={displayPadding}
                    $margin={displayMargin}
                    $maxHeight={displayMaxHeight}
                >{localText || 'Digite seu texto...'}</TextDisplay>
            )}
        </BoxBackground>
    );
};

export default EditableTextSection;
