import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // Adiciona useParams aqui
import { CharacterBox, IconePersonagem, InfoBox, NameCharacter, Origens, Title, ValueText, IconeMorte } from './Styled';
import IconePersonagemMasculino from '../../assets/Personagens/IconePersonagemMasculino.svg';
import IconePersonagemFeminino from '../../assets/Personagens/IconePersonagemFeminino.svg';
import IconeCaveira from '../../assets/Personagens/Icone Caveira.svg';

const Character = ({ name, clazz, race, gender, onDelete, id, showDeleteIcon }) => {
    const navigate = useNavigate();
    const { userId } = useParams();  // Adiciona isso para pegar o userId
    const isFemale = gender.toLowerCase() === 'female';
    const personagemIcone = isFemale ? IconePersonagemFeminino : IconePersonagemMasculino;

    const handleClick = () => {
        // Usa o userId obtido de useParams
        navigate(`/home/${userId}/charactersheet/${id}/attributecombat`);
    };

    return (
        <CharacterBox onClick={handleClick}>
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
            {showDeleteIcon && <IconeMorte src={IconeCaveira} alt="Deletar Personagem" onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
            }} />}
        </CharacterBox>
    );
};

export default Character;
