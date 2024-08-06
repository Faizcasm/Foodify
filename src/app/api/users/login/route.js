import Database from "@/database/database";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
Database()

export async function POST(request){
try {
    const reqBody = await request.json()
    const {email,password} = reqBody

    const user = await User.findOne({email:email})
    if(!user){
        return NextResponse.json({message:"Invalid user"},{status:400})
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password)
    if(!isPasswordMatch){
        return NextResponse.json({message:"Incorrect password"},{status:400})
    }
    const isVerified = await user.isVerified
    if(!isVerified){
        return NextResponse.json({message:"Please verify your email"},{status:400})
    }

    const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:36000000})
     
    const response = NextResponse.json({message:"Login Success"},{status:200})
  await response.cookies.set('token',token,{httpOnly:true,secure:true,sameSite:'None',path:'/'})
    return response
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}
}
