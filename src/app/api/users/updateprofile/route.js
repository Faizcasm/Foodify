import Database from "@/database/database";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";
import path from "path";
import { writeFile } from "fs/promises";
Database()

export async function POST(request){
try {
    const token = request.cookies.get('token')?.value || ""
    const reqBody = await request.json()
    const {newemail,newusername,newprofile} =reqBody
    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    const userId = verifyToken.id
    const user = await User.findOne({_id:userId})
    if(!user){
        return NextResponse.json({message:"user does not exist"},{status:400})
    }
    let newusernames = newusername || user.username
    let newemails = newemail || user.email
    user.username=newusernames
    user.email=newemails
    user.profile=newprofile || user.profile
    await user.save()
    console.log(user);
    return NextResponse.json({message:"Profile Updated",data:user},{status:200})
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}
}
