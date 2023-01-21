import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


//register user
export const register = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;


    //password match
    if (password !== confirmPassword) {
        next(createError(400, 'Password does not match'));

    }
    try {

        //check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            next(createError(400, 'User already exists'));
        }

        else {

            //password encryption
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);



            // craete new user
            const user = await User
                .create({
                    name,
                    email,
                    password: hashedPassword,
                });
            res.status(201).json({
                success: true,
                message: 'User created successfully',


            });

        }
    } catch (error) {
        next(error);
    }
}


//login user
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            next(createError(400, 'User does not exist'));
        }
        else {
            //check if password matches
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                next(createError(400, 'Password is incorrect'));
            }
            else {
                //remove password from user object
                const { password, ...userData } = user._doc;

                //create token
                const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_SECRET_EXPIRES_IN });
                res.cookie('access_token', token, {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                    httpOnly: true
                })
                    .status(200).json({
                        success: true,
                        message: 'Login successful',
                        token,
                        user: userData

                    });
            }
        }
    }
    catch (error) {
        next(error);
    }
}

//update user
export const update = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        //check if user exists
        const user = await User.findById(req.user.id);
        if (!user) {
            next(createError(400, 'User does not exist'));
        }
        else {
            //update user details
            const update_User = await User.findByIdAndUpdate(req.user.id, req.body);

            res.status(201).json({

                success: true,
                message: 'User updated successfully',
            });
        }
    }
    catch (error) {
        next(error);
    }
}

//deleter user
export const deleteUser = async (req, res, next) => {
    try {
        //check if user exists
        const user = await User.findById(req.user.id);
        if (!user) {
            next(createError(400, 'User does not exist'));
        }
        else {
            //delete user
            const delete_User = await User.findByIdAndDelete(req.user.id);

            res.status(201).json({

                success: true,
                message: 'User deleted successfully',
            });
        }
    }
    catch (error) {
        next(error);
    }
}