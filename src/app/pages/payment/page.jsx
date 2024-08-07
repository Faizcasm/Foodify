// 'use client';
// import React, { useContext, useState } from 'react';
// import styled from 'styled-components';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import Footer from '@/app/components/Footer';
// import Navbar from '@/app/components/Navbar';
// import { CartContext } from '@/app/context/cartcontext';
// import Image from 'next/image';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// const stripePromise = loadStripe('pk_test_51OgMFHSIQTzOyhRecoYt6vmBEtcpiz9pG5OcGVes2HZRr7uQY8jSEk3TyihOXXSec5GX23tKGwrYNA1Kj4aO7wHK00iCODBoV8');

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color: #333333;
//   min-height: 100vh;
// `;

// const PaymentCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   margin: 1rem;
//   width: 100%;
//   max-width: 500px;
//   box-sizing: border-box;
// `;
// const Cardnumber =styled.p`
//   color: #1a1a1a;
//   border-radius:20px;
//   font-size:x-small;
//   margin-bottom: 1.5rem;
//   text-align: center;
// `;
// const Title = styled.h3`
//   font-size: 1.3rem;
//   color: #1a1a1a;
//   margin-bottom: 1.5rem;
//   text-align: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 0.875rem;
//   color: #333;
//   margin-bottom: 0.5rem;
// `;

// const CardElementWrapper = styled.div`
//   background-color: #f9f9f9;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 0.75rem;
// `;

// const Button = styled.button`
//   background-color: #1a1a1a;
//   color: #ffffff;
//   padding: 0.75rem;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 1rem;
//   width: 100%;
//   margin-top: 1rem;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const CartContainer = styled.div`
//   background-color: #ffffff;
//   text-align: center;
//   width: 100%;
//   max-width:600px;
//   border-radius:5px;
//   height: auto;
//   margin-bottom: 20px;
//   color: #1a1a1a;
//   max-height: 300px; 
//   overflow-y: auto; 
// `;

// const CartItem = styled.div`
//   align-items: center;
//   padding: 1rem;
//   border-bottom: 1px solid #ddd;
// `;
// const PaymentPage = () => {
 
// const router =useRouter()
//   const {cart} =useContext(CartContext)
//   const [paying,setPaying] =useState(false)
//   const stripe = useStripe();
//   const elements = useElements();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setPaying(true)
    

//     if (!stripe || !elements) {
//       return;
//     }

//     try {
//       await axios.post(`/api/foods/payment`, { items:cart })
//     .then(res=>{
//       console.log(res);
//       toast.success("Payment success")
//       router.push('/')
//       setPaying(false)
//       axios.post(`${process.env.DOMAIN}/api/foods/orders`,{cart},{withCredentials:true})
//       .then(res=>{
//           router.push('/pages/orders')
//           toast.success('Order Placed')
//       })
//     })
//     .catch(err=>{
//       toast.error("payment failed")
//       setPaying(false)
//     })
//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//     }
//   };
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };
//   return (
//     <>
//     <Navbar/><br/><br/>
//     <Container>
//     <CartContainer>
//           {cart.map(item => (
//             <CartItem key={item.id}>
//               <div>
//                 <Image width={80} height={60} style={{ borderRadius: '30px' }} src={item.image} alt={item.name} />
//                 <h2>{item.name}</h2>
//                 <p>${item.price * item.quantity}</p>
//                 <p>{item.quantity}</p>
//               </div>
//             </CartItem>
//           ))}
//           <CartItem>
//             <p>Total: ${calculateTotal()}</p>
//           </CartItem>
//         </CartContainer>
//       <PaymentCard>
//         <Title>Checkout</Title>
      
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="cardElement">Card Details</Label>
//             <CardElementWrapper>
//               <CardElement id="cardElement" />
//             </CardElementWrapper><hr/>
//             <Cardnumber>Use test card number <br/>4242 4242 4242 4242</Cardnumber>
//           </FormGroup>
//           <Button type="submit">{paying?"Paying...":"Pay"}</Button>
//         </form>
//       </PaymentCard>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// const PaymentPageWrapper = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentPage />
//   </Elements>
// );

// export default PaymentPageWrapper;


'use client';
import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { CartContext } from '@/app/context/cartcontext';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import '@/app/styles/payment.css';  // Import the CSS file

const stripePromise = loadStripe('pk_test_51OgMFHSIQTzOyhRecoYt6vmBEtcpiz9pG5OcGVes2HZRr7uQY8jSEk3TyihOXXSec5GX23tKGwrYNA1Kj4aO7wHK00iCODBoV8');

const PaymentPage = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [paying, setPaying] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaying(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      await axios.post(`/api/foods/payment`, { items: cart })
        .then(res => {
          console.log(res);
          toast.success("Payment success");
          router.push('/');
          setPaying(false);
          axios.post(`/api/foods/orders`, { cart }, { withCredentials: true })
            .then(res => {
              router.push('/');
              toast.success('Order Placed');
            });
        })
        .catch(err => {
          toast.error("Payment failed");
          setPaying(false);
        });
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar /><br /><br />
      <div className="container">
        <div className="cart-container">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <Image width={80} height={60} style={{ borderRadius: '30px' }} src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>${item.price * item.quantity}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-item">
            <p>Total: ${calculateTotal()}</p>
          </div>
        </div>
        <div className="payment-card">
          <h3 className="title">Checkout</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="cardElement">Card Details</label>
              <div className="card-element-wrapper">
                <CardElement id="cardElement" />
              </div>
              <hr />
              <p className="cardnumber">Use test card number <br />4242 4242 4242 4242</p>
            </div>
            <button className="buttonpay" type="submit">{paying ? "Paying..." : "Pay"}</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const PaymentPageWrapper = () => (
  <Elements stripe={stripePromise}>
    <PaymentPage />
  </Elements>
);

export default PaymentPageWrapper;
