"use client"
// pages/forgotpassword.js
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';
import { UserContext } from '@/app/context/usercontext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333333;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color:#1a1a1a;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #005bb5;
  }
`;

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
const context=useContext(UserContext)
const {loading,setLoading} =context
  const router = useRouter()
  const handleSubmit =(e)=>{
    setLoading(true)
    e.preventDefault();
    axios.post(`${process.env.DOMAIN}/api/users/forgotpass`,{email})
    .then(res=>{
      console.log(res);
      router.push('/pages/resetpassword')
      toast.success('Otp has been sended')
      setLoading(false)
    })
    .catch(err=>{
      console.log(err);
      toast.error(err.response.data.message)
      setLoading(false)
    })
  }
  if(loading){
    return <Loading/>
  }
  return (
    <>
    <Container>
      <FormWrapper>
        <Title>Forgot Password</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
    
    </>
  );
};

export default ForgotPasswordPage;
