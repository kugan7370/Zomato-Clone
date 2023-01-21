import Cart from "../models/cart_model.js";

export const addCartItems = async (req, res) => {
    req.body.map((item) => {
        item.userId = req.user._id;
        item.totalPrice = item.price * item.quantity;
    });


    try {
        const add_cart_items = await Cart.insertMany(req.body);
        res.status(201).json({
            message: "Cart items added successfully",
            success: true,

        });
    } catch (error) {
        next(error);
    }
}

export const getCartItems = async (req, res, next) => {
    try {
        const get_cart_items = await Cart.find({ userId: req.user._id });
        res.status(200).json({
            message: "Cart items",
            success: true,
            data: get_cart_items,

        });
    } catch (error) {
        next(error);
    }
}

export const deleteCartItem = async (req, res, next) => {
    try {
        const delete_cart_item = await Cart.deleteMany({ userId: req.user._id })
        res.status(200).json({
            message: "Cart item deleted successfully",
            success: true,


        });
    } catch (error) {
        next(error);
    }
}

export const getAllCartItems = async (req, res, next) => {
    try {
        const get_all_cart_items = await Cart.find();
        res.status(200).json({
            message: "Cart items",
            success: true,
            data: get_all_cart_items,

        });
    } catch (error) {
        next(error);
    }
}

