'use client'
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const CartContext = createContext();

const initialState = {
  cart: [],
  carttems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'SET_FOOD_ITEMS':
      return {
        ...state,
        foodItems: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload._id),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id === action.payload._id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${process.env.DOMAIN}/api/foods/getcart`, { withCredentials: true });
        dispatch({ type: 'SET_CART', payload: response.data.data });
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async(item) => {
    try {
     const response=await axios.post(`${process.env.DOMAIN}/api/foods/addtocart`, {item}, { withCredentials: true });
     console.log(response.data);
        toast.success("Item added")
        dispatch({ type: 'ADD_TO_CART', payload: item });  
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(error.response.data.message)
    }
  };



  const removeFromCart = async (item) => {
    try {
       await axios.delete(`${process.env.DOMAIN}/api/foods/removefood/${item._id}`, { withCredentials: true });
      toast.success("Item removed")
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
      
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const incrementQuantity = (item) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };

  const decrementQuantity = (item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, foodItems: state.foodItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
