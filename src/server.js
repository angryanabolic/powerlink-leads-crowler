const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const { data } = req.body.input;

    return res.json({
        message: "ok",
        data: data
    })
});

app.listen(PORT);
