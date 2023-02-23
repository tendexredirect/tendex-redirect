const express = require("express");
const axios = require("axios");
const fs = require("fs");

const port = process.env.PORT || 5005;

const app = express();

app.listen(port, () => {
    console.log("getStarted", new Date());

});

app.get("/short/:short/:lead_id?", function (req, res) {
    axios
        .get("https://api-tendex.de/api/v1/s/" + req.params.short+(req.params.lead_id?'/'+req.params.lead_id:''))
        .then((response) => {
            res.redirect(response.data)
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

