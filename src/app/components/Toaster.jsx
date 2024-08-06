"use client";

import { Toaster } from "react-hot-toast";
import React from 'react'

function Toasters() {
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#ffffff',
      color: '#1a1a1a',
      border:'2px solid #1a1a1a',
      padding:"20px",
      borderRadius:"20px",
    },
    success: {
      duration: 3000,
      theme: {
        primary: 'white',
        secondary: 'black',
      },
    },
  }}
/>
    </>
  )
}

export default Toasters