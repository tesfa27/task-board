import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Root Route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

// Export the "app" object
export default app;