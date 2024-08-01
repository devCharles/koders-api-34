const express = require("express");
const kodersRouter = require("./koders.routes");
const mentorsRouter = require("./mentores.routes");

const app = express();
app.use(express.json());

app.use((request, response, next) => {
  console.log(`${request.method} ${request.url}: ${request.body}`);
  next();
});

app.use((request, response, next) => {
  if (request.headers.authorization === "pinkibuddin") {
    next();
  } else {
    response.status(401);
    response.json({
      message: "No tienes autorización",
      success: false,
    });
  }
});

// montar el router en el servidor
app.use("/koders", kodersRouter);
app.use("/mentors", mentorsRouter);

app.listen(8080, () => {
  console.log("Server is running");
});
