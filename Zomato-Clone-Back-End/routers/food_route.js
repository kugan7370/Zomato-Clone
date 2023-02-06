// add all routes here
import express from 'express';
import { addBulkFoods, addFoods, deleteFoods, getFood, getFoods, getPopularFoods, getTrendingFoods, updateFoods, updateTrendingStatus } from '../controllers/foods_controller.js';


const app = express();

//get food details
app.get('/get-foods', getFoods);

//add food details
app.post('/add-food', addFoods);

//add bulk food details
app.post('/add-bulk-foods', addBulkFoods);

//update food details
app.put('/update-food/:id', updateFoods);

//delete food details
app.delete('/delete-food/:id', deleteFoods);

//get food by id
app.get('/get-food/:id', getFood);

// get popular food details
app.get('/get-popular-foods', getPopularFoods);

// update trending status
app.put('/update-trending-status/:id', updateTrendingStatus);

//get trending foods
app.get('/get-trending-foods', getTrendingFoods);




export default app;










