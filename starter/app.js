const express = require('express')
require('dotenv').config()
const app = express()
require('express-async-errors');
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handlers')
 const mainRouter = require('./routes/main')


//middleware

app.use(express.static('./public'))
app.use(express.json()) 

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware)

const port = process.env.PORT || 3000

const start = async() => {
    try {
    app.listen(port, ()=> console.log(`server is  listening  on  port ${port}...`)
  );    
}catch(err) {
        console.log(err)
    }
};

start();