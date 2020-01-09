const express = require("express");
const app = express();

const cors = require("cors");
const request = require("./request");
const { currencyRates } = require("./conf");

app.use(cors());
app.listen(8081, console.log);

app.get("/ping", (req, res) => res.send("pong"));

app.get("/currency-rates", (req, res) =>
  request.get(currencyRates, { params: req.query }).then(rst => res.send(rst))
);
