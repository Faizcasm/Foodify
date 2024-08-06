
import Database from "@/database/database";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";
Database()
export async function GET(request){
    try {
        const token = request.cookies.get('token')?.value || ""
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        const userId = verify.id
        const user = await User.findOne({_id:userId})
        const data = user.cart
        return NextResponse.json({message:"Food fetched",data:data},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}