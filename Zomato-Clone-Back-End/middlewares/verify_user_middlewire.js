import User from "../models/user_model.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
//verify user using jwt token
// export const verifyUser = async (req, res, next) => {
//     const token = req.cookies.access_token;
//     if (!token) {
//         next(createError(401, 'Unauthorized'));
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.id);
//         if (!user) {
//             next(createError(401, 'Unauthorized'));
//         }
//         else {
//             req.user = user;
//             next();
//         }
//     } catch (error) {
//         next(error);
//     }
// }


// verify user jwt token

export const verifyUser = async (req, res, next) => {

    const token = req.header?.('Authorization')?.split(' ')[1];
    if (!token) {
        next(createError(401, 'Unauthorized'));
    }
    try {



        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);


        if (!user) {
            next(createError(401, 'Unauthorized'));
        }
        else {
            req.user = user;
            next();
        }
    } catch (error) {
        next(error);
    }
}
