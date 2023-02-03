import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
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

const Address = mongoose.model("Address", addressSchema);
export default Address;