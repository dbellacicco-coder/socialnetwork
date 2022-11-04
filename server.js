const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(" API RUNNING SUCCESSFULLY"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER RUNNING ON PORT ${PORT}`));
