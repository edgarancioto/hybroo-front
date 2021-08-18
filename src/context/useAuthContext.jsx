import React, { useEffect, useState, createContext } from 'react';
import firebase from '../auth/config';
import Loading from '../components/Loading';

const initialState = {
    user: null,
    userName: " ",
    userMail: ""
}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userMail, setUserMail] = useState("");
  const [userName, setUserName] = useState(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);

      setUserName(user.displayName);
      setUserMail(user.email);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ user, userName, userMail }}>{children}</AuthContext.Provider>
  );
};