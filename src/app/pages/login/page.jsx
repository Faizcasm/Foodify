// "use client"
// import { UserContext } from '@/app/context/usercontext';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useContext, useState } from 'react';
// import {toast} from 'react-hot-toast';
// import styled from 'styled-components';
// import {FaGoogle,FaGithub,FaFacebook} from 'react-icons/fa6'
// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';
// import Loading from '@/app/loading';
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 120vh;
//   background-color:#333333 ;
// `;

// const FormWrapper = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   box-sizing: border-box;
// `;

// const Title = styled.h1`
//   margin-bottom: 1.5rem;
//   margin-top:-1rem;
//   text-align: center;
//   color:#1a1a1a;
//   font-size:medium;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #1a1a1a;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #005bb5;
//   }
// `;
// const Para = styled.p`
// text-align:center;
// cursor:pointer;
// color:#1a1a1a;
// `;
// const Dero = styled.div`
// text-align:center;
// gap:20px;
// justify-content:space-between;
// `;




// const LoginPage = () => {
//   const router = useRouter()
//   const [email,setEmail] =useState('');
//   const [password,setPassword] =useState('')
// const context = useContext(UserContext)
// const {setUser,user,isLoggedIn,setIsLoggedIn,setLoading,loading} =context

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     setLoading(true)
//     axios.post('/api/users/login',{email,password})
//     .then(res=>{
//       console.log(res);
//       toast.success(res.data) 
//       setUser(true)
//       setIsLoggedIn(true)
//       toast.success("Login success")
//         router.push('/');
//         setLoading(false)
//       location.reload() 
//     })
//     .catch(err=>{
//       setLoading(true)
//       console.log(err);
//         toast.error(err.response.data.message);
//         setLoading(false)
//       })
//   }

//   if(loading){
//     return <Loading/>
//   } 
    
//   function createAccount(){
//     router.push('/pages/signup')
//   }
//   function forgotPASS(){
//     router.push('/pages/forgotpassword')
//   }

//   return (
//     <>
//       <title>Login - Foodify</title>
//     <Navbar/><br/><br/>
//     <Container>
//       <FormWrapper>
//         <Title>Hey welcome back !</Title>
//        <Dero><FaGoogle  color='red' size={30} cursor='pointer'/>      <FaGithub size={30} cursor='pointer' color='black'/>    <FaFacebook color='blue' cursor='pointer' size={30}/></Dero>
//        <hr/>
//        <Para>OR</Para>
//         <form onSubmit={handleSubmit}>
//           <Input type="email" placeholder="Email" required name='email' onChange={(e)=>setEmail(e.target.value)} />
//           <Input type="password" placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)} required />
//           <Button type="submit">Login</Button>
//         </form>
//         <Para onClick={forgotPASS}>Forgot Password?</Para>
//         <hr/>
//           <Para>OR</Para>
//           <Button onClick={createAccount}>Create Account</Button>
//       </FormWrapper>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default LoginPage;

'use client'
import { UserContext } from '@/app/context/usercontext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa6';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';
import '@/app/styles/login.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(UserContext);
  const { setUser, setIsLoggedIn, setLoading, loading } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('/api/users/login', { email, password })
      .then(res => {
        console.log(res);
        toast.success(res.data);
        setUser(true);
        setIsLoggedIn(true);
        toast.success("Login success");
        router.push('/')
        location.reload();
         setLoading(false);
      })
      .catch(err => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  function createAccount() {
    router.push('/pages/signup');
  }
  function forgotPASS() {
    router.push('/pages/forgotpassword');
  }

  return (
    <>
      <title>Login - Foodify</title>
      <Navbar />
      <br /><br />
      <div className="container">
        <div className="form-wrapper">
          <h1 className="title">Hey welcome back !</h1>
          <div className="divider">
            <FaGoogle color='red' size={30} cursor='pointer' />
            <FaGithub size={30} cursor='pointer' color='black' />
            <FaFacebook color='blue' cursor='pointer' size={30} />
          </div>
          <hr />
          <p className="para">OR</p>
          <form onSubmit={handleSubmit}>
            <input type="email" className="input" placeholder="Email" required name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="buttonlogin">Login</button>
          </form>
          <p className="para" onClick={forgotPASS}>Forgot Password?</p>
          <hr />
          <p className="para">OR</p>
          <button onClick={createAccount} className="buttonlogin">Create Account</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
