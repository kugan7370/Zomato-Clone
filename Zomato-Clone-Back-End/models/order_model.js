//order model
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    order_status: {
        type: String,
        default: "Pending",

    },
    order_total: {
        type: Number,
        required: true,
    },
    order_items: [
        {
            food_id: {
                type: String,
                required: true,
            },
            food_name: {
                type: String,
                required: true,
            },
            food_price: {
                type: Number,
                required: true,
            },
            food_quantity: {
                type: Number,
                required: true,
            },
            food_price: {
                type: Number,
                required: true,
            }
        },
    ],
},

    {
        timestamps: true,
    }


);

const Order = mongoose.model('Order', orderSchema);
export default Order;
