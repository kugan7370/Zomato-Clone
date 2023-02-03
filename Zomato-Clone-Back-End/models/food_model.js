import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isVeg: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    isPopular: {
        type: Boolean,
        default: false,
    },
    isRecommended: {
        type: Boolean,
        default: false,
    },
    isTrending: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    deliveryTime: {
        type: Number,
        default: 30,
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

    }]

},
    {
        timestamps: true,
    }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;


