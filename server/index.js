import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/routes.js';
import cors from 'cors';

// Express app creation
const app = express();
const PORT = 8000;

// Website route
app.use('/', Route);

// DB connection
Connection();

// Import Data to Database
DefaultData();


// Port listen
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})