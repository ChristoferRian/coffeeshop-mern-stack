const express = require("express");
const app = express();
const connectDB = require("./database/db");
connectDB();

const port = process.eventNames.PORT || 5000;

app.listen(port, () => console.log(`listening on ${port}`));
