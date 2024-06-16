/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { openDB } from 'idb';

export const UserContext = createContext();

const DB_NAME = 'UserDB';
const DB_VERSION = 1;
const STORE_NAME = 'userStore';

const getDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

const getItem = async (key) => {
  const db = await getDB();
  return db.get(STORE_NAME, key);
};

const setItem = async (key, value) => {
  const db = await getDB();
  return db.put(STORE_NAME, value, key);
};

export const UserProvider = ({ children }) => {
  const [items, setItemCart] = useState([]);
  const [username, setUsername] = useState('');
  const [indate, setInDate] = useState('');
  const [outdate, setOutDate] = useState('');
  const [personcount, setPersonCount] = useState('');
  const [personage, setPersonAge] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedItems = await getItem('cartItems');
        const savedUsername = await getItem('username');
        const savedInDate = await getItem('indate');
        const savedOutDate = await getItem('outdate');
        const savedPersonCount = await getItem('personcount');
        const savedPersonAge = await getItem('personage');
        
        setItemCart(savedItems || []);
        setUsername(savedUsername || '');
        setInDate(savedInDate || '');
        setOutDate(savedOutDate || '');
        setPersonCount(savedPersonCount || '');
        setPersonAge(savedPersonAge || '');
      } catch (err) {
        console.error('Error fetching data from IndexedDB', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await setItem('cartItems', items);
        await setItem('username', username);
        await setItem('indate', indate);
        await setItem('outdate', outdate);
        await setItem('personcount', personcount);
        await setItem('personage', personage);
      } catch (err) {
        console.error('Error saving data to IndexedDB', err);
      }
    };

    saveData();
  }, [items, username, indate, outdate, personcount, personage]);

  return (
    <UserContext.Provider value={{
      items,
      setItemCart,
      username,
      setUsername,
      indate,
      setInDate,
      outdate,
      setOutDate,
      personcount,
      setPersonCount,
      personage,
      setPersonAge,
    }}>
      {children}
    </UserContext.Provider>
  );
};
