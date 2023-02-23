const express = require('express');

const connect = require('./configs/db');
const cors = require("cors")



const { register, login } = require("./controllers/auth.controller")

const app = express();
app.use(cors())

app.use(express.json());



app.post("/register", register);

app.post("/login", login);


app.listen(process.env.PORT || 1342, async () => {
    try{
        await connect();
        console.log('Listening on Port 1342');
    }
    catch(err)
    {
        console.log(err.message);
    }
});