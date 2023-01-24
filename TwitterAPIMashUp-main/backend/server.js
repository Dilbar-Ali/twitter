const express = require("express");
const app = express();
const { getTweets, BEARER_TOKEN } = require('./utils')
const cors = require('cors')

const axios = require("axios");

app.use(cors())
app.get("/", (req, res) => {
    res.send({
        message: "Hello Dilbar Ali"
    })
});

app.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await getTweets(id)
    console.log(data)
    res.send({
        user: data.includes,
        data: data.data
    })
});

app.get("/:id/search", async (req, res) => {
    const text = req.query.text
    const id = req.params.id;
    const response = await axios.get(
        `https://api.twitter.com/2/tweets/search/recent?query=from:${id} ${text}`, {
        headers: {
            "Authorization": `Bearer ${BEARER_TOKEN}`
        },
    })

    res.send({
        data: response.data.data,
    })
});


app.listen(1337, () => {
    console.log("Server is running on port 1337");
});


