const express = require("express");
const axios = require("axios");
const fs = require("fs");

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
    console.log("getStarted", new Date());

});

app.get("/short/:short", function (req, res) {
    axios
        .get("https://api-tendex.de/short/" + req.params.short)
        .then((result) => {
            res.redirect(result.request.res.responseUrl)
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get("/unsubscribe", function (req, res) {
    let params = req.url.split('?')[1]
    axios
        .get("https://api-tendex.de/api/v1/blacklist/unsubscribe?" + params)
        .then((result) => {
            res.redirect('https://tendex.net')

        })
        .catch((err) => {
            console.log(err);
        });
});

