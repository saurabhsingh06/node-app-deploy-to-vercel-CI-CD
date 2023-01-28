const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Hello from the server 🤞"
    });
});

app.listen(5000, () => {
    console.log("Server is listening at port 5000");
});