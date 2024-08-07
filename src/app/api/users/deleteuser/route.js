import Database from "@/database/database";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
Database()


export async function DELETE(request){
    try {
        const token = request.cookies.get('token')?.value || ''
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        const userId =verify.id
        const user = await User.findOne({_id:userId})
        if(!user){
            return NextResponse.json({message:"Invalid user"},{status:404})
        }
        const deletion = await User.deleteOne(user)
        const response = NextResponse.json({message:"Account deleted",data:deletion,success:true},{status:200})
        response.cookies.set('token',"",{httpOnly:true,secure:true,sameSite:"None"})
        return response
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }

}
