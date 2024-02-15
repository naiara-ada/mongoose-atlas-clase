const express = require('express');
const app = express()
const PORT = 8080;
const {dbConnection} = require('./config/config');
const routes = require('./routes/index');

app.use(express.json());

app.use('/', routes);

dbConnection();



app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})