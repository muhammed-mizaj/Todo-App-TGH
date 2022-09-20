const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')


const Register = asyncHandler(async(req,res)=>{
    const {username,email,password,password2} = req.body
    if(!username || !email || !password || !password2)
    {
        res.status(400).json("Please Fill All The Details")
    }
    if(password!==password2)
    {
        res.status(400).json("Password Didn't Match")
    }
    const userExist = await User.findOne({email})
    if(userExist)
    {
        res.status(400).json("User with email Address already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(password,salt)
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    }) 
    if(user)
    {
        res.status(201).json({
            message:"User Registered Succesfully",
            _id:user.id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id)
        
        })
    }
    else
    {
        res.status(400).json("Invalid User data")
    }
})

const Login = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && await bcrypt.compare(password,user.password))
    {
        res.status(200).json({
            message:"User Login Succesfull",
            username:user.username,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else
    {
        res.status(400).json({message:"Invalid Credentials or No User Found"})
    }
})
const generateToken = (id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_SECRET,
        {expiresIn:'30d'}
        )
}

module.exports = {Register,Login}