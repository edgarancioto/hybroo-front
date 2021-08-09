import React, { useEffect, useState, createContext } from 'react';
import firebase from '../auth/config';

const initialState = {
    user: null,
    userName: " "
}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);

      setUserName(user.displayName);
    });
  }, []);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  return (
    <AuthContext.Provider value={{ user, userName }}>{children}</AuthContext.Provider>
  );
};