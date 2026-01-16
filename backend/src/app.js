import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import boardRoutes from "./routes/board.routes.js";

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Root Route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

// Routes
app.use('/api/boards', boardRoutes);

// Export the "app" object
export default app;