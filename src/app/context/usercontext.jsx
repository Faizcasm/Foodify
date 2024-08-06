"use client"

// context/UserContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn,setIsLoggedIn] =useState(false)
  const [theme,setTheme] = useState({
    color:'#ffffff',
    backgroundColor:'#333333'
  })
  const [data,setData] =useState([])
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.DOMAIN}/api/users/dash`);
      console.log(response.data.data);
      setUser(response.data.data);
      setIsLoggedIn(true)
      setLoading(true)
    } catch (error) {
      console.log(error);
      // toast.error(error.message)
      setUser(null);
      setIsLoggedIn(false)
      setLoading(false)
    } finally {
      setLoading(false);
      
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{data,setData, user, loading ,isLoggedIn,setIsLoggedIn,setUser,setLoading,setTheme,theme}}>
      {children}
    </UserContext.Provider>
  );
};
