const express = require("express");
const app = express();
const request = require("./request");
const { currencyRates } = require("./conf");

app.listen(8081, console.log);

app.get("/ping", (req, res) => res.send("pong"));

app.get("/currency-rates", (req, res) => {
  request.get(currencyRates).then(rst => res.send(rst));
});
