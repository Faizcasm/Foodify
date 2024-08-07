'use client';

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
import '@/app/styles/menu.css'; // Import the CSS file

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

  function addToFav() {
    toast.success("Item added to favourites");
  }

  return (
    <>
      <title>Menu - Foodify</title>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <header className="header">Explore Menu</header>
        <input
          type="text"
          placeholder='🔍Search for a food item... '
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="card">
              <Image src={item.image} alt={item.name} width={500} height={300} className="card-image" />
              <Image src={assets.rating_starts} alt='rating' />
              <div className="card-content">
                <span className="quan">{item.quantity = 1}</span>
                <p className="favorite" onClick={addToFav}><FaHeart /></p>
                <h3 className="card-title">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">${item.price}</p>
                <button onClick={() => addToCart(item)} className="button">
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
