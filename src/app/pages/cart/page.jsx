'use client'
import Navbar from '@/app/components/Navbar';
import { CartContext } from '@/app/context/cartcontext';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

const CartWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap:50px;
  color:#1a1a1a;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 1rem;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
  }
`;

const ItemName = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  color:#1a1a1a;
  width:10%;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  color:#1a1a1a;
`;

const QuantityButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0.5rem;
  &:disabled {
    background-color: #1a1a1a;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemPrice = styled.div`
  font-size: 1rem;
  color:#1a1a1a;
  width:10%;
  margin-left:40px;
`;

const CheckoutDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
`;

const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color:#1a1a1a;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;
const Price =styled.p`
color:#1a1a1a;
margin-left:20px;
width:auto;
`;
const Empty =styled.div`
height:70vh;
text-align:center;
margin-top:100px;

`;
const Button =styled.button`
width:10%;
height:40px;
cursor:pointer;
background-color:#ffffff;
color:#1a1a1a;
border-radius:20px;
`;
const Cart = () => {
 const {cart,incrementQuantity,decrementQuantity,removeFromCart} =useContext(CartContext)
 console.log(cart);
const router = useRouter()
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const remove = async (item) => {
    try {
      if (!item) {
        console.log("no item");
        console.log(item);
        return;
      }
      await axios.delete(`/api/foods/removefood/${item._id}`, { withCredentials: true });
      removeFromCart(item);
    } catch (error) {
      console.error('Error removing food:', error);
    }
  };
  function checkout(){
    router.push('/pages/checkout')
  }
  function menu(){
    router.push('/pages/menu')
  }
  if(cart=='') return <><Navbar/><br/><br/>
    <Empty><h1>Cart is empty !</h1>
    <Button onClick={menu}>Order now</Button>
    </Empty>
   
  <Footer/></>
  return (
    <>
      <title>Cart - Foodify</title>
    <Navbar/>
        <br/><br/>
    <br/><br/>
    <CartWrapper>
      {cart.map(item => (
        <CartItem key={item.id}>
          <ItemDetails>
            <Image width={80} height={60} style={{ borderRadius: '30px' }} src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price * item.quantity}</ItemPrice>
          </ItemDetails>
          <QuantityControls>
            <QuantityButton onClick={() => decrementQuantity(item)} disabled={item.quantity <= 1}>-</QuantityButton>
            <span>{item.quantity}</span>
            <QuantityButton onClick={() => incrementQuantity(item)}>+</QuantityButton>
            <RemoveButton onClick={() => remove(item)}>Remove</RemoveButton>
          </QuantityControls>
        
          
        </CartItem>
      ))}
      <CheckoutDetails>
        <TotalPrice>Total: ${calculateTotal()}</TotalPrice>
        <CheckoutButton onClick={checkout}>Checkout</CheckoutButton>
      </CheckoutDetails>
    </CartWrapper>
    </>
  );
};

export default Cart;
