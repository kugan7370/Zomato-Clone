// add all routes here
import express from 'express';
import userRoutes from './user_route.js';
import adminRoutes from './admin_route.js';
import foodRoutes from './food_route.js';
import cartRoutes from './cart_route.js';
import paymentRoutes from './payment_route.js';
import orderRoutes from './order_routes.js';
import categoriesRoutes from './categories_route.js';

const app = express();


app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/food', foodRoutes);
app.use('/cart', cartRoutes);
app.use('/payment', paymentRoutes)
app.use('/order', orderRoutes)
app.use('/categories', categoriesRoutes)


export default app;










