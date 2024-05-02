import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { GlobalSelect, OptionGlobal } from '../GlobalStyled.js';
import { HeaderSheetContent, HeaderSheetBox, LevelBox, NameBox, IMG, CharacterOrigins, CharacterOriginsBox, SelectTitle, LevelTitle, Level, NameTitle ,HeaderLevel} from './Styled';
import Titulo from '../../assets/Cabeçalho da Ficha/Titulo.svg';
import { CharacterSheetContext } from '../../context/CharacterSheetContext.jsx';
const HeaderSheet = ({ character }) => {
  const { updateHeaderDetails , fetchClassDetails} = useContext(CharacterSheetContext);
  
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [alignments, setAlignments] = useState([]);
  const [backgrounds, setBackgrounds] = useState([
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

  const handleChange = (field, value) => {
    updateHeaderDetails(field, value);
    if (field === 'clazz') {
      fetchClassDetails(value);
    }
  };
  
  return (
    <HeaderSheetContent>
      <HeaderSheetBox>
        <LevelBox>
          <HeaderLevel>
            <LevelTitle>NIVEL</LevelTitle>
            <Level>1</Level>  
          </HeaderLevel>
        </LevelBox>
        <NameBox>
          <NameTitle>{character.name || 'Definir Nome'}</NameTitle>
        </NameBox>
        <IMG src={Titulo} alt="Título" />
      </HeaderSheetBox>
      <CharacterOrigins>
        {['clazz', 'race', 'background', 'alignment'].map(key => (
          <CharacterOriginsBox key={key}>
            
            <GlobalSelect name={key} value={character[key] || ''} onChange={(e) => handleChange(key, e.target.value)} $height="26px" $padding="2px" $margin="10px 0 0 0">
              <OptionGlobal value="">Selecione...</OptionGlobal>
              {(key === 'clazz' ? classes : key === 'race' ? races : key === 'alignment' ? alignments : backgrounds).map(option => (
                <OptionGlobal key={option.index || option.value} value={option.index || option.value}>{option.name}</OptionGlobal>
              ))}
            </GlobalSelect>
            <SelectTitle>{key.toUpperCase()}</SelectTitle>
          </CharacterOriginsBox>
        ))}
      </CharacterOrigins>
    </HeaderSheetContent>
  );
};


export default HeaderSheet;

