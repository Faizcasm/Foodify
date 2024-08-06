import Database from "@/database/database";
import User from "@/models/userModel";
import { NextResponse,NextRequest } from "next/server";

Database()

export async function POST(request){
try {
    const reqBody = await request.json()
    const {otp} =reqBody
 console.log(otp);

 const user =await User.findOne({verifyemailotp:otp,otpexp:{$gt:Date.now()}})
 console.log(user);
if(!user){
    console.log("no user");
    return NextResponse.json({error:"Invalid User or token"},{status:400})
}

user.isVerified=true
user.verifyemailotp=undefined
user.verifyemailotpexpiry=undefined
await user.save()
return NextResponse.json({message:"Email verified"},{status:200})

} catch (error) {
    console.log(error);
    return NextResponse.json({error:error.message},{status:500})
}
}