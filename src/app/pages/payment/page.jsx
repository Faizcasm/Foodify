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
        })
        .catch(err => {
          toast.error(err.response.data.message);
          setPaying(false);
        });
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
 const handleorders=async()=>{
 await axios.post('/api/foods/orders', { cart })
            .then(res => {
              toast.success('Order Placed');
              router.push('/');
            })
         .catch(err=>{
       toast.error(err.response.data.message)
      })
 }
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
            <button className="buttonpay" onClick={handleorders} type="submit">{paying ? "Paying..." : "Pay"}</button>
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
