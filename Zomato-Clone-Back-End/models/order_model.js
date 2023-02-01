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
        },
    ],
    delivery_address: [
        {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            pincode: {
                type: Number,
                required: true,
            },
            phone: {
                type: Number,
                required: true,
            },
            fullName: {
                type: String,
                required: true,
            },
            latitude: {
                type: Number,
            },
            longitude: {
                type: Number,
            }
        },

    ]
},

    {
        timestamps: true,
    }


);

const Order = mongoose.model('Order', orderSchema);
export default Order;
