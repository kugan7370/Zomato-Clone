// add all routes here
import express from 'express';
import userRoutes from './user_route.js';
import adminRoutes from './admin_route.js';
import foodRoutes from './food_route.js';
import cartRoutes from './cart_route.js';

const app = express();


app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/food', foodRoutes);
app.use('/cart', cartRoutes);


export default app;










