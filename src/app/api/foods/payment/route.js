import Stripe from "stripe";
import {v4 as uuid} from 'uuid'
const stripe = Stripe(process.env.STRIPE_KEY)
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const reqBody = await request.json()
        const {items}=reqBody
        console.log(items);
        
        const idempotencyKey =uuid()

        return stripe.customers.create({
            email: items.email,
            source : items.id,
        }).then(customer=>{
            stripe.paymentIntents.create({
                amount :items.price*100,
                currency :'usd',
                customer:customer.id,
                receipt_email:items.email,
                description :"purchase of product.name"
            },{idempotencyKey})
        }).then(result=>{
            console.log("Payment success");
            return NextResponse.json({message:"result",result},{status:200})
        }).catch(err=>{
            console.log("error",err);
            return NextResponse.json({err:err.message},{status:404})
        })

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

