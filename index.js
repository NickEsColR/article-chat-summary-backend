const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');

const app = express();
app.use(cors());

//connect to db
dbConnection();

//read and parse body
app.use(express.json());

//routes
//articles routes
//TODO: delete articles
app.use('/api/article',require('./routes/article'))

//listen requests
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})