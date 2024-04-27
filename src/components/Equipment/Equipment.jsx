import React from 'react';
import { useCRUD } from '../../context/CRUDContext';
import { EquipmentWrapper, 
  EquipmentTitle, 
  CoinsBox, 
  CoinSlot, 
  ItemList, 
  Item, 
  ItemInput,
  InputCoin,
  ItemHeader,
  ItemHeaderTitle
  } from './styled';
 import  {IconButton, IconImage,AddButtonContainer} from '../GlobalStyled.js';
import CoinPCBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de PC.svg';
import CoinPQBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de PQ.svg';
import CoinPPBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de PP.svg';
import CoinPEBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de PE.svg';
import CoinPLBoxImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de PL.svg';
import InputNumerImage from '../../assets/Atributos e Combates/Inputs e Selects/Input 4.svg';  
import InputNameItemImage from '../../assets/Atributos e Combates/Inputs e Selects/Input 1.svg';  
import IconeButtonAddImagem from '../../assets/Atributos e Combates/Icones e Botões/Icone de Criar.svg';
import IconeButtonDeletImagem from '../../assets/Atributos e Combates/Icones e Botões/Icone de Excluir.svg';

const Equipment = () => {
    const { equipments, addEquipment, updateEquipment, deleteEquipment } = useCRUD();
  
    const handleAddItem = () => {
      const newItem = { type: '', name: '', weight: '' };
      addEquipment(newItem);
    };
  
    const handleUpdateItem = (id, field, value) => {
      const updatedEquipment = { ...equipments.find(e => e.id === id), [field]: value };
      updateEquipment(id, updatedEquipment);
    };
  
    const handleDeleteItem = (id) => {
      deleteEquipment(id);
    };
  
    return (
        <EquipmentWrapper>
          <CoinsBox>
            <CoinSlot $image={CoinPCBoxImage}><InputCoin type="number" /></CoinSlot>
            <CoinSlot $image={CoinPQBoxImage}><InputCoin type="number" /></CoinSlot>
            <CoinSlot $image={CoinPPBoxImage}><InputCoin type="number" /></CoinSlot>
            <CoinSlot $image={CoinPEBoxImage}><InputCoin type="number" /></CoinSlot>
            <CoinSlot $image={CoinPLBoxImage}><InputCoin type="number" /></CoinSlot>
          </CoinsBox>
          <ItemHeader>
            <ItemHeaderTitle>Quant</ItemHeaderTitle>
            <ItemHeaderTitle width="254px">Nome</ItemHeaderTitle>
            <ItemHeaderTitle>Peso</ItemHeaderTitle>
          </ItemHeader>
          <ItemList>
            {equipments.map((equipment, index) => (
                <Item key={index}>
                <ItemInput
                  $image={InputNumerImage}
                  width="48px"
                  type="number"
                  value={equipment.weight}
                  onChange={(e) => handleUpdateItem(equipment.id, 'type', e.target.value)}
                />
                <ItemInput
                  $image={InputNameItemImage}
                  width="254px"
                  type="text"
                  value={equipment.name}
                  onChange={(e) => handleUpdateItem(equipment.id, 'name', e.target.value)}
                />
                <ItemInput
                  $image={InputNumerImage}
                  width="48px"
                  type="number"
                  value={equipment.weight}
                  onChange={(e) => handleUpdateItem(equipment.id, 'weight', e.target.value)}
                />
                  <IconButton $justifyContent="flex-start"  onClick={() => handleDeleteItem(equipment.id)}> 
                    <IconImage src={IconeButtonDeletImagem} alt="Deletar" />
                  </IconButton>
              </Item>
            ))}
             <AddButtonContainer>
              <IconButton onClick={handleAddItem}> 
                <IconImage  src={IconeButtonAddImagem} alt="Adicionar" />
              </IconButton>
             </AddButtonContainer>
          </ItemList>
         
          <EquipmentTitle>EQUIPAMENTOS</EquipmentTitle>
        </EquipmentWrapper>
      );
  };

export default Equipment;