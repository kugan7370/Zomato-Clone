import express from 'express';
import { addCartItems, decrementCartItemQuantity, deleteCartItem, getAllCartItems, getCartItems, incrementCartItemQuantity } from '../controllers/cart_controller.js';
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

//increment cart item quantity
router.put('/increment-cart-item-quantity/:id', verifyUser, incrementCartItemQuantity);

//decrement cart item quantity
router.put('/decrement-cart-item-quantity/:id', verifyUser, decrementCartItemQuantity);



export default router;



