"use client"
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import { color } from 'framer-motion';
import Footer from '@/app/components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

const contactStyles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#333333',
    color:'#ffffff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '3rem',
    color: '#ffffff',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    color: '#ffffff',
  },
  formContainer: {
    flex: '1',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontSize: '1.2rem',
    color: '#555',
  },
  input: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  inputFocus: {
    borderColor: '#27ae60',
    outline: 'none',
  },
  submitBtn: {
    padding: '0.8rem',
    border: 'none',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: '1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  submitBtnHover: {
    backgroundColor: '#333333',
  },
  info: {
    flex: '1',
    padding: '2rem',
    color:'#ffffff'
  },
  infoTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem',
    color:'#ffffff'
  },
  infoText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
    color:'#ffffff'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    color:'#ffffff'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color:'#ffffff'
  },
  contactIcon: {
    fontSize: '1.5rem',
    color: '#ffffff',
  },
  contactText: {
    fontSize: '1.2rem',
    color: '#ffffff',
  },
};

export default function Contact() {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [message,setMessage] =useState("")
  const [processing,setProcessing] =useState(false)

  const handleSubmit = (e) => {
    setProcessing(true)
    e.preventDefault();
    axios.post(`/api/users/contact`,{name,email,message})
    .then(res=>{
      console.log(res);
      toast.success("Message sended")
      setProcessing(false)
      setName("")
      setEmail("")
      setMessage("")
    })
    .catch(err=>{
      console.log(err);
      toast.error("Something went wrong")
      setProcessing(false)
    })
  };

  return (
    <>
    <title>Contact - Foodify</title>
    <Navbar/><br/><br/><br/>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div style={contactStyles.container}>
        {/* <h1 style={contactStyles.title}>Contact Us</h1> */}
        <div style={contactStyles.content}>
          <div style={contactStyles.formContainer}>
            <form onSubmit={handleSubmit} style={contactStyles.form}>
              <label htmlFor="name" style={contactStyles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                placeholder="Your Name"
                value={name}
                style={contactStyles.input}
                required
              />
              <label htmlFor="email" style={contactStyles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Your Email"
                style={contactStyles.input}
                required
              />
              <label htmlFor="message" style={contactStyles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Your Message"
                rows="6"
                value={message}
                style={contactStyles.textarea}
                required
              />
              <button
                type="submit"
                style={contactStyles.submitBtn}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = contactStyles.submitBtnHover.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = contactStyles.submitBtn.backgroundColor)}
              >
             {processing ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
