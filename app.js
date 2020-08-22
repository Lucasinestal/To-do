const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./routes/todo');

app.use("/", router);

app.listen(port, () => {
    console.log(`Running on ${port}!`)
})