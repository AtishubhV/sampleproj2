const express = require("express");
const port = 8082;
const app = express();
app.get("/", (req, resp) => {
    resp.send("This also working");
  });
app.listen(port, console.log(`Server started at port ${port}`));