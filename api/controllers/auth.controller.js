import User from "../model/user.model.js";
import brcyptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = brcyptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(200).json({
            messgae: "user created successfully"
        })
    } catch (error) {
        next(error);
    }

};
