import express from 'express';
import Connection from './database/db.js';

// Express app creation
const app = express();
const PORT = 8000;

// DB connection
Connection();


// Port listen
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})