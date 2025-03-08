import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    category: String
}
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);