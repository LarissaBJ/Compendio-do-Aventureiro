import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContenier, ViewCharacterList } from '../../App';
import Character from '../../components/Character/Character';
import HeaderCharacterList from '../../components/HeaderCharacterList/HeaderCharacterList';
import { useCharacters } from '../../context/CharactersContext';
import CharacterModal from '../../components/Modais/CharacterModal'; 

const CharacterPage = () => {
    const { characters, removeCharacter } = useCharacters();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [filterClass, setFilterClass] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/classes')
            .then(response => setClasses(response.data.results))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleDeleteMode = () => setDeleteMode(!deleteMode);

    const handleFilterChange = (e) => {
        setFilterClass(e.target.value);
    };

    const filteredCharacters = filterClass ? characters.filter(char => char.clazz === filterClass) : characters;

    return (
        <PageContenier>
            <HeaderCharacterList toggleModal={toggleModal} deleteMode={deleteMode} toggleDeleteMode={toggleDeleteMode} onFilterChange={handleFilterChange} classes={classes} />
            <ViewCharacterList>
                {isModalOpen && <CharacterModal onClose={toggleModal} />}
                {filteredCharacters.map(char => (
                    <Character
                        key={char.id}
                        {...char}
                        onDelete={removeCharacter}
                        showDeleteIcon={deleteMode}
                    />
                ))}
            </ViewCharacterList>
        </PageContenier>
    );
};

export default CharacterPage;
