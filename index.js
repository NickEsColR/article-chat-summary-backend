const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

//read and parse body
app.use(express.json());

//routes
//articles routes
//TODO: create, get and delete articles
app.use('/api/article',require('./routes/article'))

//listen requests
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})