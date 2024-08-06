import Database from "@/database/database";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";
Database()

export async function POST(request) {
    try {
        const token = request.cookies.get('token')?.value || ""
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        const userId=verify.id
        const user = await User.findOne({_id:userId})
        if(!user){
            return NextResponse.json({message:"user not found"},{status:404})
        }
        const reqbOdy =await request.json()
        const {city,state,street,pincode,phone,name}=reqbOdy
        const address = [{city,state,street,phone,pincode,name}]
        user.address=address || user.address
        await user.save()
        return NextResponse.json({message:"address saved"},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}