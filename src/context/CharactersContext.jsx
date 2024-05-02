import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useCharacterSheetContext } from './CharacterSheetContext';

export const CharactersContext = createContext();

export const useCharacters = () => useContext(CharactersContext);

export const CharactersProvider = ({ children }) => {
    const { user } = useAuth();
    const [characters, setCharacters] = useState([]);
    const { createCharacterSheet } = useCharacterSheetContext();
    
    useEffect(() => {
        if (user) {
          const storedCharacters = localStorage.getItem(`characters_${user.userId}`);
          if (storedCharacters) {
            setCharacters(JSON.parse(storedCharacters));
          }
        }
      }, [user]);
      
      useEffect(() => {
        if (user) {
          localStorage.setItem(`characters_${user.userId}`, JSON.stringify(characters));
        }
      }, [characters, user]);

      const addCharacter = (character) => {
        console.log("Adicionando personagem:", character);
        const newCharacter = {
            ...character,
            id: Math.random().toString(36).substr(2, 9),
            sheetId: createCharacterSheet(character)
        };
        console.log("Personagem criado com ID da ficha:", newCharacter.sheetId);
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
