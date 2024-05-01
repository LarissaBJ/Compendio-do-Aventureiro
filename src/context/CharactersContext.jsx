import React, { createContext, useContext, useState } from 'react';
import { useCharacterSheetContext } from './CharacterSheetContext';

export const CharactersContext = createContext();

export const useCharacters = () => useContext(CharactersContext);

export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const { createCharacterSheet } = useCharacterSheetContext();

    const addCharacter = (character) => {
        const newCharacter = {
            ...character,
            id: Math.random().toString(36).substr(2, 9),
            sheetId: createCharacterSheet(character) // Passa dados do personagem para criar a ficha
        };
        setCharacters(prev => [...prev, newCharacter]);
    };

    const removeCharacter = (characterId) => {
        setCharacters(prev => prev.filter(char => char.id !== characterId));
    };

    return (
        <CharactersContext.Provider value={{ characters, addCharacter, removeCharacter }}>
            {children}
        </CharactersContext.Provider>
    );
};

export default CharactersProvider;
