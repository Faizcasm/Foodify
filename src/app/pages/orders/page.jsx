"use client"


import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { UserContext } from '@/app/context/usercontext';
import Loading from '@/app/loading';

const OrdersPage = () => {
    const [orders,setOrders] =useState([])
    const [address,setAddress] =useState([])
    const {setLoading,loading} =useContext(UserContext)
    const getOrders = async()=>{
      setLoading(true)
        await axios.get(`/api/foods/getorders`)
        .then(res=>{
            setOrders(res.data.data)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err);
            setLoading(false)
        })
    }
    const getAddress = () => {
      setLoading(true)
      axios.get(`/api/users/getaddress`)
          .then(res => {
              console.log(res.data);
              setAddress(res.data.data);
              setLoading(false)
          })
          .catch(err => {
              console.log(err);
              setLoading(false)
          });
  };
    useEffect(() => {
      getOrders()
      getAddress()
    },[setAddress,setOrders])
    if(loading){
      return <Loading/>
    }
    if(orders=="") return <><Navbar/><br/><br/><Container><br/><br/><br/><Title>No orders found</Title></Container> </>
  return (
    <><Navbar/><br/><br/><br/>
    <Container>
      <OrdersList>
          <OrderItem>
            <OrderDetails>
              <OrderDate>Name</OrderDate>
              <OrderTotal>Price</OrderTotal>
              <OrderStatus >Quantity</OrderStatus>
              <OrderStatus >Status</OrderStatus>
            </OrderDetails>
          </OrderItem>
          </OrdersList>
      <OrdersList>
        {orders.map((order,index) => (
          <OrderItem key={index}>
            <OrderDetails>
              <OrderDate>{order.name}</OrderDate>
              <OrderTotal>{order.price}</OrderTotal>
              <OrderStatus status={order.quantity}>{order.quantity}</OrderStatus>
              <OrderStatus >Pending</OrderStatus>
            </OrderDetails>
          </OrderItem>
        ))}
      </OrdersList>
    </Container>

    {address.length > 0 ? (
                address.map((item, index) => (
                    <AddressItem key={index}><br/>
                        <OrderDate><strong>Name:</strong> {item.name}</OrderDate><br/>
                        <OrderDate><strong>City:</strong> {item.city}</OrderDate><br/>
                        <OrderDate><strong>Street:</strong> {item.street}</OrderDate><br/>
                        <OrderDate><strong>Phone:</strong> {item.phone}</OrderDate><br/>
                        <OrderDate><strong>Pincode:</strong> {item.pincode}</OrderDate><br/>
                        <OrderDate><strong>State:</strong> {item.state}</OrderDate><br/>
                    </AddressItem>
                ))
            ) : (
                <OrderItem>No address data available.</OrderItem>
            )}
    <Footer/>
    </>
  );
};

export default OrdersPage;

// Styled-components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const OrdersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OrderItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;
const AddressItem = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width:50%;
  text-align:center;
  padding: 20px;
  margin-bottom: 10px;
  margin-left:23%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OrderDate = styled.span`
  font-size: 16px;
  color: #333;
  width:20px;
`;

const OrderTotal = styled.span`
  font-size: 16px;
  color: #333;
  width:20px;
`;

const OrderStatus = styled.span`
  font-size: 16px;
  width:70px;
  color: ${props => {
    switch (props.status) {
      case 'Completed':
        return 'green';
      case 'Processing':
        return 'orange';
      case 'Shipped':
        return 'blue';
      default:
        return 'gray';
    }
  }};
`;

