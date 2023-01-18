  require('dotenv').config()
  require('express-async-errors')

const jwt = require('jsonwebtoken');
 const {BadRequestError} = require('../error');


const Login = async (req, resp) => {
const {username, password} = req.body


   //you can use mongoose as validation from the model
  //Joi package 
    //check for validation errors 
  if (!username || !password) {
     throw new   BadRequestError('please provide email and  password')   
  }
  
  const id = new Date().getDate()
 
    //inject web token from .env  using  jwt(jsonwebToken)
const token =  jwt.sign({id, username},process.env.JWT_SECRET,{
  expiresIn:'30d',})

  resp.status(200).json({msg:'user creatd', token })
  
}

const Dashboard = async(req, resp) => {
  
  //get the second value from the token

  const luckyNumber = Math.floor(Math.random() *100)
    resp.status(200).json({msg: `Hello, ${req.user.username}`, 
    secret: `Here  is  your auhtorized data, your luck number is ${luckyNumber}` })
}

module.exports = {
  Login, Dashboard
}