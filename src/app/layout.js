import { Inter } from "next/font/google";
import "./globals.css";
import Toasters from "./components/Toaster";
import { UserProvider } from "./context/usercontext";
import React from "react";
import Head from "next/head";
import { CartProvider } from "./context/cartcontext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodify",
  description: "Foodify is a food delivery platform across the Kashmir",
};

export default function RootLayout({ children }) {
  return (
   <>
      <html lang="en" >
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
        <body className={inter.className}>
          <UserProvider>
          <CartProvider>
      <Toasters/>
            {children}
            </CartProvider>
          </UserProvider>
          {/* <Footer /> */}
        </body>
      </html>
      </>
  );
}


