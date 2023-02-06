//add order
import Order from "../models/order_model.js";


//add orders
export const addOrders = async (req, res, next) => {
    const user_id = req.user._id
    try {
        const { order_total, order_items, delivery_address } = req.body
        const order = new Order({
            user_id,
            order_total,
            order_items,
            delivery_address
        });
        const newOrder = await order.save();
        res.status(201).json({
            message: "Order added successfully",
            success: true,
            data: newOrder,
        });
    } catch (error) {
        next(error);
    }
}

//get user order details 
export const getOrders = async (req, res, next) => {

    try {
        // get order details
        const get_Orders = await Order.find({ user_id: req.user._id }).sort({ createdAt: -1 });



        res.status(200).json({
            message: "Order details",
            success: true,
            data: get_Orders,

        });

    } catch (error) {
        next(error);
    }
}

