import express from 'express';
import { addOrders, getOrders } from '../controllers/order_controller.js';
import { createPaymentIntent } from '../controllers/payment_controller.js';


const router = express.Router();
const app = express();


//add orders
router.post('/add-orders', addOrders);

//get orders
router.get('/get-orders', getOrders);





export default router;