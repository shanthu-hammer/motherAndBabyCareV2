var express = require("express");
var app = express();
var fs = require("fs");

const port = 7000;
var user = {
  user4: {
    name: "mohan",
    password: "password4",
    profession: "teacher",
    id: 4,
  },
};
app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log(__filename);
  res.send("<h2>" + __filename + "!</h2>");
});

app.get("/product/:id", (req, res) => {

  res.send("it wor " + req.params.a);
});

app.post("/product/:b", function (req, res) {
    //figure how to send a object in params: req
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});


