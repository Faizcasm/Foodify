import Database from "@/database/database";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { sendMail } from "@/helpers/mailer";
import generateOTP from "@/helpers/generateotp";
import {image1} from '@/assets/assets'
Database()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {username,email,password} =reqBody;
        const existingUser = await User.findOne({email:email})
        if(existingUser){
          return NextResponse.json({message:"User already exists"},{status:400})
        }
        
        const hashedpassword =await bcrypt.hash(password,10)
         
        const user = new User({
            username,
            email,
            password:hashedpassword,
            profile:'https://picsum.photos/200'
        })

        const otpcode = await generateOTP(6)
        console.log(otpcode);
        const savedUser = await user.save()
        console.log(savedUser);
    const sendmail =  await sendMail({email,emailType:"VERIFY",otp:otpcode,userId:savedUser._id})
    console.log(sendmail);
      return NextResponse.json({message:"Register Success",success:true,data:user},{status:200})
        
    } catch (error) {
    return NextResponse.json({message:error.message},{status:500})
    }
}