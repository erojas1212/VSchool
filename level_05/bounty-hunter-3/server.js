const express = require("express");
const app = express();

app.use(express.json());

app.use("/bounty", require("./routes/bountyRouter.js"));

app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})
