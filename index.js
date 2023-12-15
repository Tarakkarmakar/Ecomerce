


import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './Config/db.js';
import authRoutes from './Route/AuthRoute.js'

import productRoutes from './Route/productsRoute.js'
import cors from 'cors'
 
 //config env file
 dotenv.config();

 //database config
 connectDB()

 //rest object
 const app = express()

 //middlewares
 app.use(cors())
 app.use(express.json())
 app.use(morgan('dev'))

 //all routes
 app.use('/api/v1/auth', authRoutes)

 app.use('/api/v1/product', productRoutes)

 //rest api
 app.get('/', (req,res) =>{  
 res.send('<h2>Welcome :This is my api </h2>')
 })

 //PORT
 const PORT = process.env.PORT

   //run server
   app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
 })
