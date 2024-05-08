const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

//read and parse body
app.use(express.json());

//routes
//auth routes
//TODO: create, login and renew user

//articles routes
//TODO: create, get, update and delete articles

app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg:"Hello World"
    })
})

//listen requests
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})