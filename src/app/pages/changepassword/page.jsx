"use client"
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { UserContext } from '@/app/context/usercontext';
import Loading from '@/app/loading';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useContext, useState } from 'react';
import {toast} from 'react-hot-toast';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
  background-color: #333333;
`;

const Form = styled.form`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: #1a1a1a;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  
  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1a1a1a;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #005bb5;
  }
`;

const Error = styled.p`
  color: red;
  text-align: center;
`;
const passwordSchema = z.object({
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});
const ChangePassword = () => {
  const [currentpassword, setCurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const context = useContext(UserContext)
  const {user,loading,setLoading} =context
  const router = useRouter()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    if(newpassword.length<8){
      toast.error("Password must be atleast of 8 characters")
      setLoading(false)
      return;
    }
    axios.post(`${process.env.DOMAIN}/api/users/updatepassword`,{currentpassword,newpassword})
    .then(res=>{
      console.log(res);
      toast.success("Password updated")
      router.push(`/pages/profile/${user._id}`)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err);
      toast.error(err.response.data.message)
      setLoading(false)
    })
  };

if(loading){
  return <Loading/>
}
  return (
    <>
    <Navbar/>
    <br/><br/>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Change Password</Title>
        {error && <Error>{error}</Error>}
        <Input
          type="password"
          placeholder="Current Password"
         name='currentpassword'
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="New Password"
          name='newpassword'
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button type="submit">Change Password</Button>
      </Form>
    </Container>
    <Footer/>
    </>
  );
};

export default ChangePassword;
