import React from 'react';
import { PageHeaderCharacter, HeaderCharacter, TitleList, BoxCustom, BoxFilter, Label, Select, Button, Image } from './Styled';
import iconCriarPersonagem from '../../assets/Personagens/Icone Criar.svg';
import iconMatarPersonagem from '../../assets/Personagens/Icone Lapide.svg';

const HeaderCharacterList = ({ toggleModal, deleteMode, toggleDeleteMode, onFilterChange, classes }) => {
    return (
        <PageHeaderCharacter>
            <HeaderCharacter>
                <TitleList>LISTA DE PERSONAGENS</TitleList>
                <BoxCustom>
                    <BoxFilter>
                        <Label>Filtro por Classe</Label>
                        <Select onChange={onFilterChange}>
                            <option value="">Todas as Classes</option>
                            {classes.map(cls => (
                                <option key={cls.index} value={cls.index}>{cls.name}</option>
                            ))}
                        </Select>
                    </BoxFilter>
                    <Button onClick={toggleModal}><Image src={iconCriarPersonagem} alt="Criar Personagem" /></Button>
                    <Button onClick={toggleDeleteMode}><Image src={iconMatarPersonagem} alt="Deletar Personagem" /></Button>
                </BoxCustom>
            </HeaderCharacter>
        </PageHeaderCharacter>
    );
};

export default HeaderCharacterList;
