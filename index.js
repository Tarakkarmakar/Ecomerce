import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './Config/db.js';
import authRoutes from './Route/AuthRoute.js';
import productRoutes from './Route/productsRoute.js';
import cors from 'cors';

// Config env file
dotenv.config();

// Database config
connectDB();

// Rest object
const app = express();

// Middlewares
app.use(cors()); // Allow requests from any origin
app.use(express.json());
app.use(morgan('dev'));

// All routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/product', productRoutes);

// Rest API
app.get('/', (req, res) => {
  res.send('<h2>Welcome: This is my API</h2>');
});

// PORT
const PORT = process.env.PORT || 3000; 
// Run server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
