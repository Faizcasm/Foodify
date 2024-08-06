'use client'

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '@/app/context/cartcontext';
import { UserContext } from '@/app/context/usercontext';
import styled from 'styled-components';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  height: auto;
  align-items: center;
  padding: 2rem;
  background-color: #333333;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.75rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
`;

const P = styled.p`
  color: #1a1a1a;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  text-align: center;
  width: 100%;
  max-width:600px;
  border-radius:5px;
  height: auto;
  margin-bottom: 20px;
  color: #1a1a1a;
  max-height: 300px; /* Set a max height for the cart container */
  overflow-y: auto; /* Enable vertical scrolling if the content exceeds the max height */
`;

const CartItem = styled.div`
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [useDefaultAddress, setUseDefaultAddress] = useState(true);
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [street, setStreet] = useState();
const [pincode,setPincode] =useState()
const [phone,setPhone] =useState()
const [name,setName] =useState()
const [processes,setProcess] =useState(false)
const router =useRouter()
  const handleSubmit = (e) => {
    setProcess(true)
    e.preventDefault();
    axios.post(`/api/users/address`, { city, street, state,phone,pincode ,name})
      .then(res => {
        router.push('/pages/payment')
        setProcess(false)
      })
      .catch(err => {
        toast.error("Failed to update address");
        setProcess(false)
      });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <title>Checkout - Foodify</title>
      <Navbar />
      <Container>
        <CartContainer>
          {cart.map(item => (
            <CartItem key={item.id}>
              <div>
                <Image width={80} height={60} style={{ borderRadius: '30px' }} src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>${item.price * item.quantity}</p>
                <p>{item.quantity}</p>
              </div>
            </CartItem>
          ))}
          <CartItem>
            <p>Total: ${calculateTotal()}</p>
          </CartItem>
        </CartContainer>
        <Form onSubmit={handleSubmit}>
         
            <>
              <Input
                type="text"
                name="street"
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street Address"
                required
              />
              <Input
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                required
              />
              <Input
                type="text"
                name="state"
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                required
              />
              <Input
                type="number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
              />
              <Input
                type="number"
                name="pincode"
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Pincode"
                required
              />
               <Input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </>
     
          <Button type="submit">{processes?"Proceeding...":"Proceed to order"}</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;

