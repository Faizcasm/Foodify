import Database from "@/database/database";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";


Database()

export async function GET(request){
    try {
        const token = request.cookies.get('token')?.value || ""
        if(!token){
            console.log("no token");
            return NextResponse.json({message:"no token"},{status:400})
        }
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        const userId = decodedToken.id
        const user = await User.findOne({_id:userId}).select('-password')
        if(!user){
            return NextResponse.json({message:"Invalid user"},{status:400})
        }
        return NextResponse.json({message:"User details fetched",success:true,data:user},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:error.message},{status:500})
        
    }
}