let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.use("/assets" ,express.static("public"));

app.get("/", (request, response) => {
  response.render("pages/index");
});
app.get("/page1", (request, response) => {
  response.render("pages/page1");
});
app.get("/page2", (request, response) => {
  response.render("pages/page2");
});
app.get("/page3", (request, response) => {
  response.render("pages/page3");
});

app.listen(8080);
console.log("Beni soit le port 8080 ...");
