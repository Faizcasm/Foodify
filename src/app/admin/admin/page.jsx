'use client'
import axios from 'axios'
import React, { useState, useTransition } from 'react'

function Addfood() {
    const [foodName,setFoodName] =useState()
    const [foodImg,setFoodImg] =useState()
    const [foodPrice,setFoodPrice] =useState()
    const [foodDescription,setFoodDescription] =useState()
    const [foodCategory,setFoodCategory] =useState()

    const submit =(e)=>{
        e.preventDefault()
        axios.post('/api/foods/addfood',{foodCategory,foodName,foodDescription,foodPrice,foodImg})
        .then(res=>{
            console.log(res);
            alert('added')
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
    <>
        <form onSubmit={submit}>
            <input type='name' name='foodName' placeholder='name' onChange={(e)=>setFoodName(e.target.value)}/>
            <input type='name' name='foodCategory' placeholder='category' onChange={(e)=>setFoodCategory(e.target.value)}/>
            <input type='name' name='foodDescription' placeholder='desc' onChange={(e)=>setFoodDescription(e.target.value)}/>
            <input type='number' name='foodPrice' placeholder='price' onChange={(e)=>setFoodPrice(e.target.value)}/>
            <input type='file' name='foodImg' placeholder='d' onChange={(e)=>setFoodImg(e.target.value)}/>
            <button type='submit'>add</button>
        </form>
    </>
  )
}

export default Addfood