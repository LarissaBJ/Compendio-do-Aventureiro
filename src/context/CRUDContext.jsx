import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
export const CRUDContext = createContext();

// Hook personalizado para usar o contexto de equipamentos
export const useCRUD = () => useContext(CRUDContext);

// Provedor de contexto
export const CRUDProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);

  const addEquipment = (equipment) => {
    setEquipments([...equipments, { ...equipment, id: equipments.length }]);
  };

  const updateEquipment = (id, updatedEquipment) => {
    setEquipments(equipments.map(equipment => equipment.id === id ? updatedEquipment : equipment));
  };

  const deleteEquipment = (id) => {
    setEquipments(equipments.filter(equipment => equipment.id !== id));
  };

  return (
    <CRUDContext.Provider value={{ equipments, addEquipment, updateEquipment, deleteEquipment }}>
      {children}
    </CRUDContext.Provider>
  );
};
