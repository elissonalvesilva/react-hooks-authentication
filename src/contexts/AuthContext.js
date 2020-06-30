import React, {createContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import authLogin from '../services/auth';

const AuthContext = createContext({
  signed: false,
  user: {
    name: '',
    email: '',
  },
  token: '',
  loading: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    function loadStorageData () {
      const storageUser = localStorage.getItem('user');
      const storageToken = localStorage.getItem('token');

      if (!storageUser || !storageToken) {
        history.push('/login');
      }

      if (storageUser && storageToken) {
        setUser(JSON.stringify(storageUser));
        
      }
      
      setLoading(false);
    }

    loadStorageData();
  });

  const login = async () => {
    const response = await authLogin();
    setUser(response.user);

    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('token', response.token);
    history.push('/');
  };

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loading, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };