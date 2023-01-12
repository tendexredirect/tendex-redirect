const express = require("express");
const axios = require("axios");
const fs = require("fs");

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
    console.log("getStarted", new Date());
   
});

// https://api-tendex.de/api/v1/services/logos/get
// http://127.0.0.1:8000/api/v1/services/logos/get
app.get("/short/:short", function (req, res) {
    axios
    .get("http://localhost:8000/short/"+req.params.short)
    .then((result) => {
        res.redirect(result.request.res.responseUrl)
    })
    .catch((err) => {
        console.log(err);
    });
});

