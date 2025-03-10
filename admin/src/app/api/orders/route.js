import { NextResponse } from "next/server"


import { connectedToDatabase } from "@/lib/mongodb"
import Order from "@/models/Order"



export const GET = async() => {

    try{

        await connectedToDatabase()
        const orders = await Order.find({})

        return NextResponse.json(orders, {status:200})

    }catch(error) {
        return NextResponse.json({status:500})
    }

}