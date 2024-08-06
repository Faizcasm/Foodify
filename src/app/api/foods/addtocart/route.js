
import Database from "@/database/database";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
Database()
export async function POST(request){
    try {
        const token = request.cookies.get('token')?.value || ""
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        const userId = verify.id
        const user = await User.findOne({_id:userId})
        if(!user){
            return NextResponse.json({message:"not a user "},{status:404})
        }
        const reqBody = await request.json()
        const {item} =reqBody
        const existingItemIndex = user.cart.findIndex(cartItem => cartItem._id.toString() === item._id);
        if (existingItemIndex !== -1) {
            user.cart[existingItemIndex].quantity +=1;
            console.log('Item quantity incremented in cart');
            return NextResponse.json({message:"item already in cart"},{status:400})
          }

          user.cart.push(item);
        await user.save();
        console.log('Item added to cart');
        return NextResponse.json({message:"Item added to cart"},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}


  

  
  
