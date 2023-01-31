import express from 'express';
import { createPaymentIntent } from '../controllers/payment_controller.js';


const router = express.Router();
const app = express();


//create payment intent
router.post('/create-payment', createPaymentIntent);





export default router;