const express = require('express');
const ejs = require('ejs');
const upload = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Multer is running fine and so is nodemon..");
});

app.listen(port, () => console.log(`Server is running at ${port}..`));