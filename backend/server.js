import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

// Load environment variables (Port, DB URLs, etc.)
dotenv.config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});