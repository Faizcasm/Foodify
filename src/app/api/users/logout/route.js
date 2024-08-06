import Database from "@/database/database";
import { NextRequest, NextResponse } from "next/server";

Database()

export async function POST(request){

try {
    const response = NextResponse.json({message:"Logout success"},{status:200})
    response.cookies.set('token',"",{httpOnly:true,secure:true})
    return response
} catch (error) {
    return NextResponse.json({error:error.message},{status:500})
}    
}