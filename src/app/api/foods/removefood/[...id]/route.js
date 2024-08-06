import Database from "@/database/database";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

Database();

export async function DELETE(request) {
    try {
        // Extract itemId from URL parameters
        const url = new URL(request.url);
        const itemId = url.pathname.split('/').pop(); // Extracts the last segment of the URL
        console.log('Item ID:', itemId);
        console.log(itemId);
        if (!itemId) {
            return NextResponse.json({ message: "Item ID is required" }, { status: 400 });
        }

        console.log('Item ID:', itemId);

        // Get token from cookies
        const token = request.cookies.get('token')?.value || "";
        if (!token) {
            return NextResponse.json({ message: "Authentication token missing" }, { status: 401 });
        }

        // Verify token and extract user ID
        const verify = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for secret
        const userID = verify.id;

        // Find user in database
        const user = await User.findOne({ _id: userID });
        if (!user) {
            console.log('User not found');
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        user.cart = user.cart.filter(cartItem => cartItem._id.toString() !== itemId);
        await user.save();

        console.log("Removed item:", itemId);
        return NextResponse.json({ message: "Item removed successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error in removeFood controller:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
