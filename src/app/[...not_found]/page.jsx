'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333333;
  text-align: center;
  color:#ffffff;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #ff6347;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled(Link)`
  font-size: 1rem;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid #1a1a1a;
  border-radius: 30px;
  background-color: #fff;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: darkblue;
    color: #ffffff;
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you’re looking for doesn’t exist.</Message>
      <HomeLink href="/">Go Back to Foodify</HomeLink>
    </Container>
  );
};

export default NotFoundPage;
