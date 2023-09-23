import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/Routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Express app creation
const app = express();
const PORT = 8000;

// Website route
app.use(cors());
app.use('/', Route);

// DB connection
Connection();

// Import Data to Database
DefaultData();


// Port listen
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})