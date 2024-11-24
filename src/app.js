const express = require('express');
const app = express();
const swaggerSetup = require('./swagger');  
require('dotenv').config();
const cookieParser = require("cookie-parser");
const cors = require('cors');


app.use(express.json());
app.use(cookieParser());
app.use(cors());

swaggerSetup(app); 

const authRouter = require("./routes/authRouter");
const orderRouter = require("./routes/orderRouter");
const connectDatabase = require('./configuration/databaseConnect');

app.use("/api", authRouter)
app.use("/api/customer", orderRouter);

app.get('/', (req, res) => {
    res.send('Order Service APIs - Developed by Mohd Faiz !');
  });


connectDatabase()
    .then(() => {
        console.log(`Database connected `);
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at the port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`Unable to connect to database ${err}`)
    })

module.exports = app;