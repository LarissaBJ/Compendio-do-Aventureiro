import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getUsersFromLocalStorage = () => {
  const usersData = localStorage.getItem('users');
  return usersData ? JSON.parse(usersData) : [];
};

const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(getUsersFromLocalStorage());
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  
  const register = async (credentials, navigate) => {
    const { email, password, userName } = credentials;
    const users = getUsersFromLocalStorage();
    console.log("Usuários antes da adição:", users); 
  
    if (users.some(u => u.email === email)) {
      alert('Usuário já cadastrado com este e-mail.');
    } else {
      const newUser = {
        userId: Date.now(),
        email,
        password,
        userName
      };
      const updatedUsers = [...users, newUser];
      console.log("Usuários após adição:", updatedUsers); 
  
      saveUsersToLocalStorage(updatedUsers);
      localStorage.setItem('user', JSON.stringify(newUser)); 
      setUser(newUser);
      navigate(`/home/${newUser.userId}`);
    }
  };


  const login = async (credentials, navigate) => {
    const { email, password } = credentials;
    const users = getUsersFromLocalStorage();
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      navigate(`/home/${foundUser.userId}`);
    } else {
      alert('Credenciais incorretas ou usuário não cadastrado');
    }
  };


  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };


  const isAuth = () => !!user;

 
  return (
    <AuthContext.Provider value={{ user, users, register, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
