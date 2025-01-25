// server.js
require('dotenv').config(); // Load .env variables
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes'; // Import routes
import errorHandler from './middlewares/errorHandler'; // Custom error handler

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Mount auth routes

// Error Handler
app.use(errorHandler); // Catch and handle errors

// Database Connection
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
