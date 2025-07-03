const express = require("express");
const app = express();
const port = process.env.port || 3000;
const postRouter = require("./routers/posts");
const routeNotFound = require("./middlewares/routeNotFound");
const serverErrorHandler = require("./middlewares/serverErrorHandler");

app.use(express.json());
app.use(express.static("public"));
app.use("/api/posts", postRouter);

app.use(serverErrorHandler);
app.use(routeNotFound);

app.listen(port, () => {
  console.log("Il server è in ascolto sulla porta" + " " + port);
});
