import Database from "@/database/database";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from "@/models/userModel";
Database()

export async function POST(request){
try {
    const token = request.cookies.get('token')?.value || ""
    const reqBody = await request.json()
    const {currentpassword,newpassword} =reqBody
    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    const userId = verifyToken.id
    const user = await User.findOne({_id:userId})
    if(!user){
        return NextResponse.json({message:"user does not exist"},{status:400})
    }
    const isPasswordMatch = await bcrypt.compare(currentpassword,user.password)
    if(!isPasswordMatch){
        return NextResponse.json({message:"Incorrect password"},{status:400})
    }
    const hashedpassword = await bcrypt.hash(newpassword,10)
    user.password=hashedpassword
    await user.save()
    return NextResponse.json({message:"Password updated"},{status:200})
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}
}