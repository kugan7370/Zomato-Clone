import Category from "../models/categories_model.js";

//add categories
export const addCategories = async (req, res, next) => {
    try {
        const { name, image } = req.body;
        const add_category = await Category.create({
            name,
            image
        });
        res.status(200).json({
            message: "Category added successfully",
            success: true,
            data: add_category
        });
    } catch (error) {
        next(error);
    }
}


//get categories
export const getCategories = async (req, res, next) => {
    try {
        const get_categories = await Category.find();
        res.status(200).json({
            message: "Categories",
            success: true,
            data: get_categories
        });
    } catch (error) {
        next(error);
    }
}