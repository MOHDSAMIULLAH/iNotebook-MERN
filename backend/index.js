// nodemon index.js
//npm run start
// const Router = require("./routes")

const cors = require('cors');
const express = require('express')
const mongoose = require("mongoose");
const connectToMongo = require('./db');
const port = process.env.PORT || 4000

const app = express()

app.use(cors());
app.use(express.json());

connectToMongo();


// available routes
    app.use('/api/auth',require('./routes/auth'))
    app.use('/api/notes',require('./routes/notes'))


app.get('/', (req, res) => {
    res.send('hello  ')
})
// http://localhost:4000/api/auth/
app.listen(port,()=>{
    console.log(`listening ${port} test`);
})
// app.use(Router);

console.log("nodemon is running now");