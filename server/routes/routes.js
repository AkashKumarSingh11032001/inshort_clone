import express  from "express";

const Route = express.Router();

Route.get('/news',(request, required)=>{
    console.log("Akash!");
    
})

export default Route; 