const express = require("express");

const router = express.Router();

router.use((request, response, next) => {
  console.log("middleware de router koders");
  next();
});

// Podemos montar otros routers ej.
// router.use("/attendance", attendanceRouter);

// GET /koders
router.get(
  "/",
  (request, response, next) => {
    console.log("GET koders middleware");
    next();
  },
  (request, response) => {
    response.json({ message: "GET koders" });
  }
);

router.post("/", (request, response) => {
  response.json({ message: "POST koders" });
});

// GET /koders/sofia
router.delete("/sofia", (request, response) => {
  response.json({ message: "DELETE sofia" });
});

// DELETE /koders/:name
//        /koders/gegrewgrew
//        /koders/algo
router.delete("/:name", (request, response) => {
  response.json({ message: "DELETE koders" });
});

router.get("/:name/attendance/:day", (request, response) => {
  response.json({ message: "GET koders attendance" });
});

module.exports = router;
