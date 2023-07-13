const express = require("express");
const app = express();
const courses = require("./routes/courses");
const student = require("./routes/students");
const registration = require("./routes/registration");
const db = require("./models");

app.get("/", (req, res) => {
  console.log("made a request");
  res.status(200).send("Course Registration");
});

//middleware
app.use(express.json());

//routes
app.use("/api/v1/courses", courses, registration);
app.use("/api/v1/students", student);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
