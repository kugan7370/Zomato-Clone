import express from 'express';
import { addCartItems, deleteCartItem, getAllCartItems, getCartItems } from '../controllers/cart_controller.js';
import { verifyUser } from '../middlewares/verify_user_middlewire.js';

const router = express.Router();
const app = express();


//add cart item
router.post('/add-cart-item', verifyUser, addCartItems);

//get cart items
router.get('/get-cart-items', verifyUser, getCartItems);

//get all card items
router.get('/get-all-cart-items', getAllCartItems);

//delete cart items
router.delete('/delete-cart-item', verifyUser, deleteCartItem);



export default router;



