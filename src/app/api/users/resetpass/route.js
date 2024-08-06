import Database from "@/database/database";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

Database()

export async function POST(request){
try {
    const reqBody = await request.json()
    const {otp,newpassword} =reqBody
  
 const user = await User.findOne({resetpassotp:otp,resetpassexpiry:{$gt:Date.now()}})
 console.log(user);
if(!user){
    console.log("no user");
    return NextResponse.json({error:"Invalid credientials"},{status:400})
}
const hashedNewPassword =await bcrypt.hash(newpassword,10)
user.password=hashedNewPassword
user.resetpassexpiry=undefined
user.resetpassotp=undefined
await user.save()
return NextResponse.json({message:"Password changed"},{status:200})
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}
}