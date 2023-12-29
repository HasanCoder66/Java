import bcryptjs from 'bcryptjs'
import User from '../model/userSchema.js'

export const register = async (req, res) => {
    try {
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hash });
  
      await newUser.save();
      res.status(200).json("User signup successfully");
    } catch (error) {
      console.log(error);
    }
  };