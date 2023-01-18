require('dotenv').config()
  require('express-async-errors')

  const jwt = require('jsonwebtoken');

 const {BadRequestError} = require('../error');
const { route } = require('../routes/main');

const Login = async (req, resp) => {
  const {username, password} = req.body


   //you can use mongoose as validation from the model
  //Joi 
  //check  in the controller as well 
  if (!username || !password) {
     throw new   BadRequestError('please provide email and  password')   
  }
  //justt for demo, normally provided by  Db!!

  const id = new Date().getDate()
  console.log()
 

const token =  jwt.sign({id, username},process.env.JWT_SECRET,{
  expiresIn:'30d',})

   console.log(token)

  resp.status(200).json({msg:'user creatd', token })
  
}

const Dashboard = async(req, resp) => {
   console.log(req.user);  

  //get the second value from the token
  
    const luckyNumber = Math.floor(Math.random() *100)
    resp.status(200).json({msg: `Hello, ${req.user.username}`, 
    secret: `Here  is  your auhtorized data, your luck number is ${luckyNumber}` })
 

}



module.exports = {
  Login, Dashboard
}