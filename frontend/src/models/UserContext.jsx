/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [items, setItemCart] = useState(() => { 
    try {
      const savedItems = localStorage.getItem('cartItems');
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (err) {
      console.error("Error parsing cartItems from localStorage", err);
      return [];
    }
  });
  
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(items));
      localStorage.setItem('username', username);
    } catch (err) {
      console.error("Error setting localStorage items", err);
    }
  }, [items, username]);
 

  const [indate , setInDate] = useState();
  const [outdate , setOutDate] = useState();
  const [personcount , setPersonCount] = useState();
  const [personage , setPersonAge] = useState();
  return (
    <UserContext.Provider value={{ items, setItemCart, username, setUsername ,indate ,setInDate ,personcount, setPersonCount ,setPersonAge ,personage,outdate,setOutDate }}>
      {children}
    </UserContext.Provider>
  );
};
