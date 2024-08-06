import Database from "@/database/database.js";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel.js";
import { NextResponse } from "next/server.js";
Database()
export async function POST(request){
    try {
        const token = request.cookies.get('token')?.value || ""
        const reqBody = await request.json()
        const {cart} =reqBody
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        const userID = verify.id
        const user = await User.findOne({_id:userID})
        user.orders =cart
        await user.save()
        return NextResponse.json({message:"ordered success"},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

