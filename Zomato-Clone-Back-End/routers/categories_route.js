import express from 'express';
import { addCategories, getCategories } from '../controllers/categories_controller.js';
import { verifyUser } from '../middlewares/verify_user_middlewire.js';



const router = express.Router();
const app = express();


//add categories
router.post('/add-categories', addCategories);

//get categories
router.get('/get-categories', getCategories);





export default router;