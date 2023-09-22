import express  from "express";

const Route = express.Router();

Route.get('/news',()=>{
    console.log("Akash!");
})

export default Route; 