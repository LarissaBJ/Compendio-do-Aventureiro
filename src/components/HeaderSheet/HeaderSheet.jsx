import React,{useState , useContext, useEffect} from 'react';
import { 
  HeaderSheetContent, 
  HeaderSheetBox, 
  LevelBox, 
  NameBox, 
  IMG, 
  CharacterOrigins, 
  CharacterOriginsBox,
  SelectTitle,
  LevelTitle,
  Level,
  HeaderLevel,
  NameTitle
} from './Styled'; 
import { GlobalSelect , OptionGlobal} from '../GlobalStyled.js';
import Titulo from '../../assets/Cabeçalho da Ficha/Titulo.svg';
import axios from 'axios';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';

const HeaderSheet = () => {
  const { updateHeaderDetails } = useContext(CharacterSheetContext);
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [alignments, setAlignments] = useState([]);
  const antecedentes = [
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
  ];
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

  const handleChange = (field) => (event) => {
    updateHeaderDetails(field, event.target.value);
  };

  return (
    <HeaderSheetContent>
      <HeaderSheetBox>
        <LevelBox>
          <HeaderLevel>
            <LevelTitle>NÍVEL</LevelTitle>
            <Level>1</Level>
          </HeaderLevel>
        </LevelBox>

        <NameBox>
          <NameTitle>KIRA FIORE</NameTitle>
        </NameBox>

        <IMG src={Titulo} alt="título" />
      </HeaderSheetBox>

      <CharacterOrigins>
        <CharacterOriginsBox>
          <GlobalSelect name="class" onChange={handleChange('class')} $height="26px" $padding="2px" $margin="10px 0 0 0">
          <OptionGlobal value="">Selecione...</OptionGlobal>
            {classes.map(cls => (
              <OptionGlobal key={cls.index} value={cls.index}>{cls.name}</OptionGlobal>
            ))}
          </GlobalSelect>
          <SelectTitle>CLASSE</SelectTitle>
        </CharacterOriginsBox>

        <CharacterOriginsBox>
          <GlobalSelect name="race" onChange={handleChange('race')} $height="26px" $padding="2px" $margin="10px 0 0 0">
          <OptionGlobal value="">Selecione...</OptionGlobal>
            {races.map(race => (
              <OptionGlobal key={race.index} value={race.index}>{race.name}</OptionGlobal>
            ))}
          </GlobalSelect>
          <SelectTitle>RAÇA</SelectTitle>
        </CharacterOriginsBox>

        <CharacterOriginsBox>
          <GlobalSelect name="background" onChange={handleChange('background')} $height="26px" $padding="2px" $margin="10px 0 0 0">
          <OptionGlobal value="">Selecione...</OptionGlobal>
            {antecedentes.map(ant => (
              <OptionGlobal key={ant.value} value={ant.value}>{ant.name}</OptionGlobal>
            ))}
          </GlobalSelect>
          <SelectTitle>ANTECENDENTE</SelectTitle>
        </CharacterOriginsBox>

        <CharacterOriginsBox>
          <GlobalSelect name="alignment" onChange={handleChange('alignment')} $height="26px" $padding="2px" $margin="10px 0 0 0">
          <OptionGlobal value="">Selecione...</OptionGlobal>
            {alignments.map(alignment => (
              <OptionGlobal key={alignment.index} value={alignment.index}>{alignment.name}</OptionGlobal>
            ))}
          </GlobalSelect>
          <SelectTitle>ALINHAMENTO</SelectTitle>
        </CharacterOriginsBox>
      </CharacterOrigins>
    </HeaderSheetContent>
  );
};

export default HeaderSheet;
