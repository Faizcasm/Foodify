
'use client'
import styled from 'styled-components';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { UserContext } from '@/app/context/usercontext';
import { z } from 'zod';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-color: #333333;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  margin-top: -1rem;
  text-align: center;
  color: #1a1a1a;
  font-size: medium;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Para = styled.p`
  text-align: center;
  color: #1a1a1a;
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

const Dero = styled.div`
  text-align: center;
  gap: 20px;
  justify-content: space-between;
`;

const signupSchema = z.object({
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string()
    .email({ message: "Invalid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});

const SignupPage = () => {
  const context = useContext(UserContext);
  const { loading, setLoading } = context;
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      signupSchema.parse({username,password,email});

      setLoading(true);

      await axios.post(`${process.env.DOMAIN}/api/users/signup`, {username,email,password});

      router.push('/pages/verifyemail');
      setLoading(false);
      toast.success("Otp has been sended");
    } catch (error) {
      
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => toast.error(err.message));
      } else {
        toast.error("Signup failed");
      }
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading/>
  }

  const loginroute = () => {
    router.push('/pages/login');
  };

  return (
    <>
      <title>Signup - Foodify</title>
    <Navbar/><br/><br/>
    <Container>
      <FormWrapper>
        <Title>Welcome to fast delivery!</Title>
        <Dero>
          <FaGoogle color='red' size={30} cursor='pointer' />
          <FaGithub size={30} cursor='pointer' color='black' />
          <FaFacebook color='blue' cursor='pointer' size={30} />
        </Dero>
        <hr />
        <Para>OR</Para>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            required
            name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign Up</Button>
          <hr />
          <Para>OR</Para>
          <Button onClick={loginroute}>Login</Button>
        </form>
      </FormWrapper>
    </Container>
    <Footer/>
    </>
  );
};

export default SignupPage;
