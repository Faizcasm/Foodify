

'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { assets, food_list } from '@/assets/assets';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { UserContext } from '@/app/context/usercontext';
import { CartContext } from '@/app/context/cartcontext';
import { useContext, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #333333;
`;

const Header = styled.header`
  width: 50%;
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 1.5rem 2rem;
  border-radius: 30px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #f4f4f4;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0.5rem 0;
`;

const CardPrice = styled.p`
  font-size: 1rem;
  color: #e74c3c;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const Quan = styled.span`
  display: none;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  width: 40%;
  height: 30px;
  text-decoration: none;
  border-radius: 30px;
  cursor: pointer;
`;
const Favorite = styled.p`
color:red;
cursor:pointer;
`;
const MenuPage = () => {
  const { setData } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(food_list);

  useEffect(() => {
    setData(food_list);
  }, [setData]);

  useEffect(() => {
    setFilteredItems(
      food_list.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);
  function addToFav(){
    toast.success("Item added to favourites")
  }
  return (
    <>
    <title>Menu - Foodify</title>
      <Navbar />
      <br />
      <br />
      <Container>
      
        <Header>Explore Menu</Header>
        <SearchInput
          type="text"
          placeholder='🔍Search for a food item... '
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <MenuGrid>
          {filteredItems.map((item, index) => (
            <Card key={index}>
              <CardImage src={item.image} alt={item.name} width={500} height={300} />
              <Image src={assets.rating_starts} alt='rating' />
              <CardContent>
                <Quan>{item.quantity = 1}</Quan>
                <Favorite onClick={addToFav}><FaHeart/></Favorite>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardPrice>${item.price}</CardPrice>
                <Button onClick={() => addToCart(item)}>
                  Add to bag
                </Button>
              </CardContent>
            </Card>
          ))}
        </MenuGrid>
      </Container>
      <Footer />
    </>
  );
};

export default MenuPage;
