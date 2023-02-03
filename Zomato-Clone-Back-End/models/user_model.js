import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],

    },
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: Object,
        default: {
            public_id: '',
            url: ''
        }
    },
    likedFoods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
        }
    ]
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema);
export default User;