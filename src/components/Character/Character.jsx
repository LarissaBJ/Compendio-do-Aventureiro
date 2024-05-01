import React from 'react';
import { CharacterBox, IconePersonagem, InfoBox, NameCharacter, Origens, Title, ValueText, IconeMorte } from './Styled';
import IconePersonagemMasculino from '../../assets/Personagens/IconePersonagemMasculino.svg';
import IconePersonagemFeminino from '../../assets/Personagens/IconePersonagemFeminino.svg';
import IconeCaveira from '../../assets/Personagens/Icone Caveira.svg';

const Character = ({ name, clazz, race, gender, onDelete, id, showDeleteIcon }) => {
    // Agora verificamos se o gênero é 'female' para determinar se o ícone feminino deve ser usado
    const isFemale = gender.toLowerCase() === 'female';
    const personagemIcone = isFemale ? IconePersonagemFeminino : IconePersonagemMasculino;

    return (
        <CharacterBox>
            <IconePersonagem src={personagemIcone} alt={`Personagem ${isFemale ? 'Feminino' : 'Masculino'}`} />
            <InfoBox>
                <NameCharacter>{name}</NameCharacter>
                <Origens>
                    <Title>Classe:</Title>
                    <ValueText>{clazz}</ValueText>
                </Origens>
                <Origens>
                    <Title>Raça:</Title>
                    <ValueText>{race}</ValueText>
                </Origens>
            </InfoBox>
            {showDeleteIcon && <IconeMorte src={IconeCaveira} alt="Deletar Personagem" onClick={() => onDelete(id)} />}
        </CharacterBox>
    );
};

export default Character;
