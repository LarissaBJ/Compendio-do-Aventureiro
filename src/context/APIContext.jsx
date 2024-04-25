// APIContext.js
import React, { createContext, useState, useContext } from 'react';

export const APIContext = createContext();

export const useAPI = () => useContext(APIContext);

export const APIProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/${endpoint}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <APIContext.Provider value={{ data, fetchData }}>
      {children}
    </APIContext.Provider>
  );
};
