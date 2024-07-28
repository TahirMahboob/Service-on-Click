// UserContextProvider.js 3rd
import { useEffect, useState } from 'react';
import UserContext from './UserContext';

const hardcodedAdmin = {
  userDetails: 'Admin User',
  token: 'admin-token',
  role: 'admin',
  email: 'admin@example.com',
  password: 'admin123', // Only for testing purposes
};

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userDetails: '',
    token: '',
    role: '',
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('auth'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    if (email === hardcodedAdmin.email && password === hardcodedAdmin.password) {
      const loggedInUser = { ...hardcodedAdmin };
      localStorage.setItem('auth', JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setUser({ userDetails: '', token: '', role: '' });
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
