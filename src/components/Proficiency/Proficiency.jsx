import React from 'react';
import { useCRUD } from '../../context/CRUDContext.jsx';
import { ProficiencyWrapper,
  ProficiencyTitle,
  ProficiencyHeader,
  ProficiencyHeaderTitle,
  ProficiencyList,
  ProficiencyItem, 
  ProficiencySelect 
} from './styled';
import  {IconButton, IconImage,AddButtonContainer} from '../GlobalStyled.js';
import InputSelectImage from '../../assets/Atributos e Combates/Inputs e Selects/Select de Prociencia.svg';
import IconeButtonAddImagem from '../../assets/Atributos e Combates/Icones e Botões/Icone de Criar.svg';
import IconeButtonDeletImagem from '../../assets/Atributos e Combates/Icones e Botões/Icone de Excluir.svg';

const Proficiency = () => {
    const { proficiencies, addProficiency, updateProficiency, deleteProficiency } = useCRUD();
  
    const handleAddProficiency = () => {
        const newProficiency = { type: '', name: '' };
        addProficiency(newProficiency);
    };
      
    const handleUpdateProficiency = (id, field, value) => {
        const proficiencyToUpdate = proficiencies.find(p => p.id === id);
        if (proficiencyToUpdate) {
            const updatedProficiency = { ...proficiencyToUpdate, [field]: value };
            updateProficiency(id, updatedProficiency);
        }
    };
      
    const handleDeleteProficiency = (id) => {
        deleteProficiency(id);
    };
      
    return (
        <ProficiencyWrapper>
            <ProficiencyTitle>PROFICIÊNCIA E IDIOMAS</ProficiencyTitle>
            <ProficiencyHeader>
                <ProficiencyHeaderTitle>Tipo</ProficiencyHeaderTitle>
                <ProficiencyHeaderTitle>Proficiência</ProficiencyHeaderTitle>
            </ProficiencyHeader>
            <ProficiencyList>
                {proficiencies.map((proficiency) => (
                    <ProficiencyItem key={proficiency.id}>
                        <ProficiencySelect
                          $image={InputSelectImage}
                          value={proficiency.type}
                          onChange={(e) => handleUpdateProficiency(proficiency.id, 'type', e.target.value)}
                        />
                        <ProficiencySelect
                          $image={InputSelectImage}
                          value={proficiency.name}
                          onChange={(e) => handleUpdateProficiency(proficiency.id, 'name', e.target.value)}
                        />
                        <IconButton width="14px" height="14px" onClick={() => handleDeleteProficiency(proficiency.id)}> 
                            <IconImage src={IconeButtonDeletImagem} alt="Deletar" />
                        </IconButton>
                    </ProficiencyItem>
                ))}
                <AddButtonContainer>
                    <IconButton width="14px" height="14px" onClick={handleAddProficiency}> 
                        <IconImage src={IconeButtonAddImagem} alt="Adicionar" />
                    </IconButton>
                </AddButtonContainer>
            </ProficiencyList>
        </ProficiencyWrapper>
    );
};

export default Proficiency;
