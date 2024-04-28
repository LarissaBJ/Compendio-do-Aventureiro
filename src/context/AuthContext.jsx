import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

const generateRandomUserId = () => {
  return Math.floor(Math.random() * 90000) + 10000; 
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocalStorage());
  
    const login = async (credentials, navigate) => {
      const mockUserId = generateRandomUserId(); 
      const userData = { userId: mockUserId, ...credentials }; 
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      navigate(`/home/${mockUserId}`); 
    };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const isAuth = () => {
    return user != null;
  };

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
