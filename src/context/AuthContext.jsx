import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());



  const register = async (credentials, navigate) => {
    const { email } = credentials;
    const existingUser = getUserFromLocalStorage();
    if (existingUser && existingUser.email === email) {
      alert('Usuário já cadastrado com este e-mail.');
    } else {
      const newUser = {
        userId: Date.now(), 
        ...credentials
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      console.log("Após login:", localStorage.getItem('user'));
      setUser(newUser);
      navigate(`/home/${newUser.userId}`);
    }
  };

  const login = async (credentials, navigate) => {
    const { email, password } = credentials;
    const storedUser = getUserFromLocalStorage();
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      navigate(`/home/${storedUser.userId}`);
      console.log("Após login:", localStorage.getItem('user'));
    } else {
      alert('Credenciais incorretas ou usuário não cadastrado');
      console.log("Após login:", localStorage.getItem('user'));
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuth = () => !!user;

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
