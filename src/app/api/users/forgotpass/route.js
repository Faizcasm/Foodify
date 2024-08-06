import Database from "@/database/database";
import generateOTP from "@/helpers/generateotp";
import { sendMail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

Database()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email} = reqBody

        const user =await User.findOne({email:email})
        if(!user){
            return NextResponse.json({message:"Email does not exist"},{status:400})
        }
        const otpcode = await generateOTP(6)
        console.log(otpcode);
    const sendmail =  await sendMail({email,emailType:"RESET",otp:otpcode,userId:user._id})
    console.log(sendmail);
      return NextResponse.json({message:"Reset Mail sended",success:true,user},{status:200})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}