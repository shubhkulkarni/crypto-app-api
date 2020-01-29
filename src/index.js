const express = require("express");
const app = express();

const cors = require("cors");
const request = require("./request");
const { currencyRates } = require("./conf");

app.use(cors());
app.listen(8081, console.log);

app.get("/ping", (req, res) => res.send("pong"));

app.get("/currency-rates", async (req, res) =>
  res.send(await request.get(currencyRates, { params: req.query }))
);

app.get("/countries", async (req, res) =>
  res.send(
    await request.get(
      "https://restcountries.eu/rest/v2/all?fields=name;flag;currencies"
    )
  )
);
