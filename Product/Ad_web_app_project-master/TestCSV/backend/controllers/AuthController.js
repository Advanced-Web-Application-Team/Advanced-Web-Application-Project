const bcrypt = require("bcrypt");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');

module.exports = {

    authRegister: asyncHandler(async (req, res) => {

        let checkUserExists = await User.findOne({username: req.body.username});

        if (checkUserExists) {
          
          res.status(400)
          throw new Error("Username already exists! Please fill again."); 
        }

        let emailExists = await User.findOne({email: req.body.email});

        if (emailExists) {
          res.status(400)
          throw new Error("Email already exists! Please fill again.");
        }

        try {

          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(req.body.password, salt);
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
          });
      
          const user = await newUser.save();
          res.status(200).json({
            username: user.username,
            email: user.email,
            token: getToken(user._id)
          });
        } catch (error) {
          res.status(500).json(err);
        }
      }),

    authLogin: asyncHandler(async (req, res) => {
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        res.status(400)
        throw new Error("Wrong credentials!");
      }
      
      
      const validated = await bcrypt.compare(req.body.password, user.password);

      if (!validated) {
        res.status(400)
        throw new Error("Wrong credentials!");
      }
    

        try {
    
      //not sending password back to users
          const { password, ...others } = user._doc;
          res.status(200).json({
            username: user.username,
            email: user.email,
            token: getToken(user._id)
          });
        } catch (err) {
          res.status(500).json(err);
        }
      })

}

function getToken (id) {
  return jwt.sign({id: id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}
