import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import routes from './routers/index.js';
import morgan from 'morgan';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Connect to MongoDB

const connect = async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.Mongo_Connect);
        console.log('db Connected ')
    } catch (error) {
        throw error
    }
}

// Routes
app.use('/api', routes);


//eroor handling
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(status).json({
        message,
        success: false,

    });
});


//create server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connect();
});




