import Cart from "../models/cart_model.js";

export const addCartItems = async (req, res, next) => {


    try {
        //check already added or not
        const already_added = await Cart.findOne({ userId: req.user._id, foodId: req.body.foodId });
        if (already_added) {
            //update quantity
            const update_quantity = await Cart.findOneAndUpdate({ userId: req.user._id, foodId: req.body.foodId }, {
                quantity: req.body.quantity
            }, { new: true })
            res.status(200).json({
                message: "Item quantity updated",
                success: true,
                data: update_quantity
            });

        } else {
            //add new item
            const add_item = await Cart.create({
                userId: req.user._id,
                foodId: req.body.foodId,
                quantity: req.body.quantity,
                price: req.body.price,
                name: req.body.name,
                image: req.body.image,
            })
            res.status(200).json({
                message: "Item added to cart",
                success: true,
                data: add_item
            });
        }
    } catch (error) {
        next(error);

    }





}

export const getCartItems = async (req, res, next) => {
    console.log(req.user._id);
    try {
        //get user cart items
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

export const incrementCartItemQuantity = async (req, res, next) => {
    try {
        const increment_cart_item_quantity = await Cart.findOneAndUpdate({ userId: req.user._id, foodId: req.params.id }, {
            $inc: { quantity: 1 }
        }, { new: true })
        res.status(200).json({
            message: "Item quantity updated",
            success: true,
            data: increment_cart_item_quantity
        });
    } catch (error) {
        next(error);
    }
}

export const decrementCartItemQuantity = async (req, res, next) => {
    try {

        //check cart item quantity
        const check_cart_item_quantity = await Cart.findOne({ userId: req.user._id, foodId: req.params.id });

        if (check_cart_item_quantity.quantity === 1) {
            //delete cart item
            const delete_cart_item = await Cart.deleteOne({ userId: req.user._id, foodId: req.params.id });
            res.status(200).json({
                message: "Item deleted",
                success: true,
                data: delete_cart_item
            });
        }

        //decrement cart item quantity

        if (check_cart_item_quantity.quantity > 1) {
            const decrement_cart_item_quantity = await Cart.findOneAndUpdate({ userId: req.user._id, foodId: req.params.id }, {
                $inc: { quantity: -1 }
            }, { new: true })

            res.status(200).json({
                message: "Item quantity updated",
                success: true,
                data: decrement_cart_item_quantity
            })
        }

    } catch (error) {
        next(error);
    }
}

