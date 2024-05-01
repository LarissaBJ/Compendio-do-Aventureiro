import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CharacterBoxModal, Title, InfoCharacter, InputBox, Label, Input, Select, Button, InfoOrigens,ButtonClose } from './Styled'; // Verifique os caminhos
import DraggableModal  from './DraggableModal.jsx'
import { useCharacters } from '../../context/CharactersContext'; // Adapte o caminho conforme necessário

const CharacterModal = ({ onClose }) => {
    const { addCharacter } = useCharacters();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [clazz, setClazz] = useState('');
    const [race, setRace] = useState('');
    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [alignments, setAlignments] = useState([]);
    const [backgrounds] = useState([
        { value: 'acolyte', name: 'Acolyte' },
        { value: 'charlatan', name: 'Charlatan' },
        { value: 'criminal', name: 'Criminal' },
        { value: 'entertainer', name: 'Entertainer' },
        { value: 'folk-hero', name: 'Folk Hero' },
        { value: 'guild-artisan', name: 'Guild Artisan' },
        { value: 'hermit', name: 'Hermit' },
        { value: 'noble', name: 'Noble' },
        { value: 'outlander', name: 'Outlander' },
        { value: 'sage', name: 'Sage' },
        { value: 'sailor', name: 'Sailor' },
        { value: 'soldier', name: 'Soldier' },
        { value: 'urchin', name: 'Urchin' },
        { value: 'knight', name: 'Knight' },
        { value: 'pirate', name: 'Pirate' },
        { value: 'spy', name: 'Spy' },
    ]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [classData, raceData, alignmentData] = await Promise.all([
                    axios.get('https://www.dnd5eapi.co/api/classes'),
                    axios.get('https://www.dnd5eapi.co/api/races'),
                    axios.get('https://www.dnd5eapi.co/api/alignments')
                ]);
                setClasses(classData.data.results);
                setRaces(raceData.data.results);
                setAlignments(alignmentData.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = () => {
        if (name && gender && clazz && race && background && alignment) {
            addCharacter({
                name,
                gender,
                clazz,
                race,
                background,
                alignment
            });
            setName('');
            setGender('');
            setClazz('');
            setRace('');
            setBackground('');
            setAlignment('');
            onClose();
            alert('Personagem criado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return ReactDOM.createPortal(
        <DraggableModal onClose={onClose}>
        <CharacterBoxModal>
            <ButtonClose onClick={onClose}></ButtonClose>
                <Title>Criar Personagem</Title>
                <InfoCharacter>
                    <InputBox>
                        <Label>NOME</Label>
                        <Input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </InputBox>
                    <InputBox>
                        <Label>GENERO</Label>
                        <Select value={gender} onChange={e => setGender(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="male">Masculino</option>
                            <option value="female">Feminino</option>
                        </Select>
                    </InputBox>
                </InfoCharacter>
                <InfoOrigens>
                    <InputBox>
                        <Label>CLASSE</Label>
                        <Select value={clazz} onChange={e => setClazz(e.target.value)}>
                            <option value="">Selecione</option>
                            {classes.map(cls => (
                                <option key={cls.index} value={cls.index}>{cls.name}</option>
                            ))}
                        </Select>
                    </InputBox>
                    <InputBox>
                        <Label>RACA</Label>
                        <Select value={race} onChange={e => setRace(e.target.value)}>
                            <option value="">Selecione</option>
                            {races.map(race => (
                                <option key={race.index} value={race.index}>{race.name}</option>
                            ))}
                        </Select>
                    </InputBox>
                    <InputBox>
                        <Label>ANTECEDENTE</Label>
                        <Select value={background} onChange={e => setBackground(e.target.value)}>
                            <option value="">Selecione</option>
                            {backgrounds.map(bg => (
                                <option key={bg.value} value={bg.value}>{bg.name}</option>
                            ))}
                        </Select>
                    </InputBox>
                    <InputBox>
                        <Label>ALINHAMENTO</Label>
                        <Select value={alignment} onChange={e => setAlignment(e.target.value)}>
                            <option value="">Selecione</option>
                            {alignments.map(align => (
                                <option key={align.index} value={align.index}>{align.name}</option>
                            ))}
                        </Select>
                    </InputBox>
                </InfoOrigens>
                <Button onClick={handleSubmit}>CRIAR</Button>
            </CharacterBoxModal>
        </DraggableModal>,
        document.getElementById('modal-root')
    );
};

export default CharacterModal;

