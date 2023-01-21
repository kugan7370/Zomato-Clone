import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }

);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;

