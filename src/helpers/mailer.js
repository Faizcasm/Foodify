import User from '@/models/userModel';
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function sendMail({email,emailType,otp,userId}){
try {
    const Datedata=Date.now()+3500000
if(emailType==="VERIFY"){
await User.findByIdAndUpdate(userId,{
    $set:{
        verifyemailotp:otp,
        otpexp:Datedata
      }
})
}
else if(emailType==="RESET"){
    await User.findByIdAndUpdate(userId,{
        $set:{
          resetpassotp:otp,
            resetpassexpiry:Datedata
          }
    })
}

const transport = nodemailer.createTransport({
  service:"gmail",
  auth:{
       user:process.env.GMAIL,
       pass:process.env.GMAIL_SECRET
  }

})
const mailoptions ={
    from: 'faizanillahi573@gmail.com', 
    to: email, 
    subject: emailType==="VERIFY" ?"Verify email Otp" :"Reset Password Otp", 
    html: `<p>Your One Time Password (OTP) for https://www.foodify.com is  ${otp}</p>`, 
}
   

const mailresponse = await transport.sendMail(mailoptions)
console.log("message sended ",mailresponse);
    return mailresponse

} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}


}