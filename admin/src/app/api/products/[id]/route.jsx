import { connectedToDatabase } from "@/lib/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"






export const DELETE = async(req, {params}) => {

    try{
        await connectedToDatabase()

        const {id} = params

        const product = await Product.findById(id)

        if(!product){
            return NextResponse.json({status:404})
        }

        await product.deleteOne()
        return NextResponse.json({status:200})

    }catch(error) {
        return NextResponse.json({status:500})
    }

}



export const PUT = async(req, {params}) => {

    try{

        await connectedToDatabase()

        const {id} = params

        const data = await req.json()
        const product = await Product.findById(id)

        if(!product){
            return NextResponse.json({status:404})
        }

        Object.assign(product, data)
        await product.save()
        return NextResponse.json({status:200})

    }catch(error) {
        return NextResponse.json({status:500})
    }

} 


export async function GET(req, {params}){
    try{
        await connectedToDatabase()
        const {id} = params
        const product = await Product.findById(id)
        if(!product){
            return NextResponse.json({status:404})
        }
        
        return NextResponse.json({product},{status:200})
    } 
    catch(error){
        return NextResponse.json({status:500})
    }
}
