'use client';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { UserContext } from '@/app/context/usercontext';
import Loading from '@/app/loading';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #333333;
  min-height: 100vh;
`;

const AddressCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  width: 100%;
  max-width: 600px;
`;

const AddressDetail = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align:center;
  border:2px solid #1a1a1a;
  border-radius:20px;
`;

function Page() {
    const [address, setAddress] = useState([]);
    const {loading,setLoading} =useContext(UserContext)
    const getAddress = () => {
        setLoading(true)
        axios.get('/api/users/getaddress')
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
        getAddress();
    }, []);
    if(loading){
        return <Loading/>
    }
    return (
        <>
        <Navbar/>
        <br/><br/>
        <Container>
            {address.length > 0 ? (
                address.map((item, index) => (
                    <AddressCard key={index}>
                    <Title>User Address</Title>
                        <AddressDetail><strong>Name:</strong> {item.name}</AddressDetail>
                        <AddressDetail><strong>City:</strong> {item.city}</AddressDetail>
                        <AddressDetail><strong>Street:</strong> {item.street}</AddressDetail>
                        <AddressDetail><strong>Phone:</strong> {item.phone}</AddressDetail>
                        <AddressDetail><strong>Pincode:</strong> {item.pincode}</AddressDetail>
                        <AddressDetail><strong>State:</strong> {item.state}</AddressDetail>
                        <Title><strong>Developer Address</strong></Title>
                        <div className='google-map'>         
<iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26410.60651366149!2d74.53592734559861!3d34.16358663968073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a1e4ec52b755%3A0xa5ed223653817012!2spattan%20193121!5e0!3m2!1sen!2sin!4v1722934560508!5m2!1sen!2sin`} 
width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
</div>
                    </AddressCard>
                ))
            ) : (
                <AddressCard>No address data available.</AddressCard>
            )}

         
        </Container>
        <Footer/>
        </>
    );
}

export default Page;
