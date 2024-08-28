"use client"
import styled from 'styled-components';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';
import { UserContext } from '@/app/context/usercontext';
import Loading from '@/app/loading';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333333;
`;

const FormWrapper = styled.div`
  background: #ffffff;
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

const OtpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const OtpInput = styled.input`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1a1a1a;
  color: white;
  border: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #005bb5;
  }
`;

const VerifyEmailPage = () => {
  const [otp, setOtp] = useState('');
 const context = useContext(UserContext)
 const {loading,setLoading} =context
const router = useRouter()
const handleSubmit =  (e) => {
  e.preventDefault();
    setLoading(true)
    axios.post(`/api/users/verifyemail`, {otp})
    .then(res=>{
    console.log(res);
    toast.success("Email Verified");
    router.push('/pages/login');
    setLoading(false)
  })
  .catch(err=>{
     console.log(err);
    toast.error(err.response.data.message);
    setLoading(false)
  })
};
if(loading){
  return <Loading/>
}
  return (
    <><title>Verify email - Foodify</title>
    <Container>
       <Title>Verify Email</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <OtpContainer>     
              <OtpInput
                type="number"
                name="otp"
                maxLength="1"
                value={otp}
                placeholder='Enter otp'
                required
                onChange={(e) => setOtp(e.target.value)}
              />
        </OtpContainer>
        <Button type="submit">Verify</Button>
      </FormWrapper>
    </Container>
    </>
  );
};

export default VerifyEmailPage;
