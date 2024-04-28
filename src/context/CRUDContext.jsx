import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
export const CRUDContext = createContext();

// Hook personalizado para usar o contexto de equipamentos e proficiências
export const useCRUD = () => useContext(CRUDContext);

// Provedor de contexto
export const CRUDProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [proficiencies, setProficiencies] = useState([]);
  const [attacks, setAttacks] = useState([]);

  //------------------------------------------------------------------------------------------------------------------------------------------------
  // Funções para Equipamentos
  const addEquipment = (equipment) => {
    setEquipments([...equipments, {...equipment, id: equipments.length}]);
  };

  const updateEquipment = (id, updatedEquipment) => {
    setEquipments(equipments.map(equipment => equipment.id === id ? updatedEquipment : equipment));
  };

  const deleteEquipment = (id) => {
    setEquipments(equipments.filter(equipment => equipment.id !== id));
  };
  //------------------------------------------------------------------------------------------------------------------------------------------------
  // Funções para Proficiências
  const addProficiency = (proficiency) => {
    setProficiencies([...proficiencies, {...proficiency, id: proficiencies.length}]);
  };

  const updateProficiency = (id, updatedProficiency) => {
    setProficiencies(proficiencies.map(proficiency => proficiency.id === id ? updatedProficiency : proficiency));
  };

  const deleteProficiency = (id) => {
    setProficiencies(proficiencies.filter(proficiency => proficiency.id !== id));
  };

  //------------------------------------------------------------------------------------------------------------------------------------------------
  // Funções para Ataques
  const addAttack = (attack) => {
    setAttacks([...attacks, {...attack, id: attacks.length}]);
  };

  const updateAttack = (id, updatedAttack) => {
    setAttacks(attacks.map(attack => attack.id === id ? updatedAttack : attack));
  };

  const deleteAttack = (id) => {
    setAttacks(attacks.filter(attack => attack.id !== id));
  };
  //------------------------------------------------------------------------------------------------------------------------------------------------

  return (
      <CRUDContext.Provider value={{
        equipments, addEquipment, updateEquipment, deleteEquipment,
        proficiencies, addProficiency, updateProficiency, deleteProficiency,
        attacks, addAttack, updateAttack, deleteAttack
      }}>
        {children}
      </CRUDContext.Provider>
  );
};
