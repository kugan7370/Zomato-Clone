import express from 'express';
import { deleteUser, login, register, update } from '../controllers/user_controller.js';
import { verifyUser } from '../middlewares/verify_user_middlewire.js';

const router = express.Router();
const app = express();


//user register route
router.post('/register', register);

//user login route
router.post('/login', login);

//user update route
router.put('/update', verifyUser, update);

//user delete route
router.delete('/delete', verifyUser, deleteUser);



export default router;



