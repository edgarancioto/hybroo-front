import React, { useEffect, useState, createContext } from 'react';
import firebase from '../auth/config';

const initialState = {
    user: null
}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};