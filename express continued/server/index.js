const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const verifyToken = require('./middleware/authMiddleware');

// const productRoutes = require('./routes/productRoutes');
require('./config/dbConfig');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes)
app.use('/user', verifyToken, userRoutes)
// app.use('/product', productRoutes)

app.get('/',(req,res)=>{
    res.json({"status":"up and running!"})
})
// two types of routes
// 1. users routes
// 2. products routes


app.listen(port,(err)=>{
    if(!err)
    console.log('Server is up and running on port:', port);
})