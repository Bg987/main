const { translate } = require('microsoft-translate-api')
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.post("/indexTr", (req, res) => {
    let x = req.body;
    let data = [x.a, x.b];
    translate(data, 'en', x.lang).then(translation => {
        res.json(translation);
    }).catch(err => {
        console.error(err);
    });
})
app.listen(port, (error) => {
    if (error) {
        console.log("error in server");
    }
    else {
        console.log("server start on " + port);
    }
})
