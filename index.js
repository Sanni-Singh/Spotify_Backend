const express = require('express');
const connection = require('./src/model/db.model');
const userRouter = require('./src/router/user.router.js');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/api/user',userRouter);

const PORT = process.env.PORT || 8000;
connection.connect(()=> console.log('database is connect succesfully'));
app.listen(PORT,()=> console.log('Server is up and running on ', PORT));