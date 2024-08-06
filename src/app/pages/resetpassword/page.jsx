"use client"

// pages/resetpassword.js
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'react-hot-toast';
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
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: #005bb5;
  }
`;

const ResetPasswordPage = () => {
  const context = useContext(UserContext)
const {loading,setLoading} =context
  const [newpassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter()
  const handleSubmit =(e)=>{
    setLoading(true)
    e.preventDefault();
    if(newpassword.length<8){
      toast.error("Password must be atleast of 8 characters")
      setLoading(false)
      return;
    }
    axios.post('/api/users/resetpass',{otp,newpassword})
    .then(res=>{
      console.log(res);
      toast.success("Password changed")
      router.push('/pages/login')
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
  const isDisabled = otp.length === 0;

  return (
    <><title>Reset password - Foodify</title>
    <Container>
      <FormWrapper>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="New Password"
            name='newpassword'
            
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="OTP"
           
            name='otp'
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <Button type="submit" disabled={isDisabled}>
            Reset Password
          </Button>
        </form>
      </FormWrapper>
    </Container>
    </>
  );
};

export default ResetPasswordPage;
