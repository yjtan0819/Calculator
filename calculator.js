const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = Number(num1) + Number(num2);
  res.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile("bmiCalculator.html", { root: __dirname });
});

app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var ans = Number(weight) / (Number(height) * Number(height));
  res.send("Your BMI is " + ans);
});

app.listen(port, () => {
  console.log("App listening at " + port);
});
