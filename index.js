const express = require('express');
const connection = require('./src/model/db.model');
const userRouter = require('./src/router/user.router.js');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/user',userRouter);

const PORT = process.env.PORT || 8000;
connection.connect(()=> console.log('database is connect succesfully'));
app.listen(PORT,()=> console.log('Server is up and running on ', PORT));