import Database from "@/database/database";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
Database()

export async function GET(request){
try {
    const token = request.cookies.get('token')?.value || ""
    const verify = jwt.verify(token,process.env.JWT_SECRET)
    const userId = verify.id
    const user = await User.findOne({_id:userId})
    if(!user){
        return NextResponse.json({message:"Invalid user"})
    }
    const data = user.address
    return NextResponse.json({data},{status:200})
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}
}