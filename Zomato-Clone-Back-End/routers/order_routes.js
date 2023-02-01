import express from 'express';
import { addOrders, getOrders } from '../controllers/order_controller.js';
import { verifyUser } from '../middlewares/verify_user_middlewire.js';



const router = express.Router();
const app = express();


//add orders
router.post('/add-orders', verifyUser, addOrders);

//get orders
router.get('/get-orders', verifyUser, getOrders);





export default router;